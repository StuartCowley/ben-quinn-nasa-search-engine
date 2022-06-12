import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns button with text", () => {
    const { getByText } = render(<Search />);

    expect(getByText(/search/i)).toHaveAttribute("type", "submit");
  });
});
