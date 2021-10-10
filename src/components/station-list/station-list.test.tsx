import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import StationList from "@components/station-list/station-list";
import Loader from "@components/loader/loader";

afterEach(cleanup);

describe("Test the Station List", () => {
  test("The list wrapper", async () => {
    render(<StationList />);
    const wrapper = await screen.findByLabelText("Station List");
    expect(wrapper).toBeInTheDocument();
  });

  test("The loader", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
