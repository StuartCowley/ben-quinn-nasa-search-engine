import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Serach", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
