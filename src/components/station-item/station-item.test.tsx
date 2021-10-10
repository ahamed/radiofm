import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import stations from "../../data.json";

import StationItem from "@components/station-item/station-item";
import Container from "@components/container/container";
import StoreProvider from "@hooks/useRadioStore";
import reducer from "@store/reducer";
import StationList from "@components/station-list/station-list";

afterEach(cleanup);

describe("Individual Station", () => {
  test("Single Station", () => {
    render(
      <StationItem
        station={{
          id: 1,
          name: "Radio Foorti",
          frequency: "88,0",
          image: "./images/stations/planet-01.png",
        }}
      />
    );

    expect(screen.getByText("Radio Foorti")).toBeInTheDocument();
    expect(screen.getByText("88,0")).toBeInTheDocument();
  });

  test("Multiple stations", () => {
    stations.forEach((station) => {
      <StationItem key={station.id} station={station} />;
    });

    stations.forEach(async (station) => {
      const stationName = await screen.findByText(station.name);
      const stationFrequency = await screen.findByText(station.frequency);
      expect(stationName).toBeInTheDocument();
      expect(stationFrequency).toBeInTheDocument();
    });
  });

  const customRender = (
    Component: any,
    { providerProps, ...renderOptions }: any,
    _render: any
  ) => {
    return _render(
      <StoreProvider {...providerProps}>{Component}</StoreProvider>,
      renderOptions
    );
  };

  test("After station selection the footer should display the station name.", async () => {
    customRender(
      <Container />,
      {
        providerProps: {
          initialState: {
            stations: [{ id: 1, name: "abc", frequency: "89,2", image: "" }],
          },
          reducer,
        },
      },
      render
    );

    fireEvent.click(screen.getByTestId("selectionElement"));
    expect(screen.getByTestId("stationInFooter")).toHaveTextContent("abc");
  });

  it("Should go to the next station", async () => {
    customRender(
      <Container />,
      {
        providerProps: {
          initialState: {
            stations: [
              { id: 1, name: "abc", frequency: "89,2", image: "" },
              { id: 2, name: "xyz", frequency: "90,2", image: "" },
            ],
            activeStation: { id: 1, name: "abc", frequency: "89,2", image: "" },
          },
          reducer,
        },
      },
      render
    );

    fireEvent.click(screen.getAllByTestId("nextStation")[0]);

    waitFor(() => {
      expect(screen.getByTestId("stationInFooter")).toHaveTextContent("xyz");
    });
  });

  it("Should go to the previous station", async () => {
    customRender(
      <Container />,
      {
        providerProps: {
          initialState: {
            stations: [
              { id: 1, name: "abc", frequency: "89,2", image: "" },
              { id: 2, name: "xyz", frequency: "90,2", image: "" },
            ],
            activeStation: { id: 2, name: "xyz", frequency: "90,2", image: "" },
          },
          reducer,
        },
      },
      render
    );

    fireEvent.click(screen.getAllByTestId("prevStation")[0]);

    waitFor(() => {
      expect(screen.getByTestId("stationInFooter")).toHaveTextContent("abc");
    });
  });
});
