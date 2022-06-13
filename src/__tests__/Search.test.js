import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns input with placeholder text", () => {
    const { getByPlaceholderText } = render(<Search />);

    expect(getByPlaceholderText(/search/i)).toBeVisible();
  });

  it("returns button with icon", () => {
    const { getByTestId } = render(<Search />);

    const icon = getByTestId("search__icon");
    const button = getByTestId("search__button");

    expect(button).toContainElement(icon);
  });
});
