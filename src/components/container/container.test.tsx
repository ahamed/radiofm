import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Container from "@components/container/container";

afterEach(cleanup);

describe("Test the container", () => {
  test("The header", () => {
    render(<Container />);
    const navigationElement = screen.getByRole("navigation");
    const backButton = screen.getByTitle("Back");
    const powerButton = screen.getByTitle("Power");
    const headerTitle = screen.getByText("Stations");

    expect(navigationElement).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(powerButton).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
  });

  test("The main body", () => {
    render(<Container />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  test("The footer section", () => {
    render(<Container />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
