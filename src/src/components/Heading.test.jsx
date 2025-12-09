import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading from "./Heading";

describe("Heading component", () => {
  test("renders title and action buttons", () => {
    render(<Heading />);

    // Heading text
    expect(
      screen.getByText(/Explore cute pets around you/i)
    ).toBeInTheDocument();

    // Buttons
    expect(
      screen.getByRole("button", { name: /I want to see cat/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /I want to see dog/i })
    ).toBeInTheDocument();
  });
});
