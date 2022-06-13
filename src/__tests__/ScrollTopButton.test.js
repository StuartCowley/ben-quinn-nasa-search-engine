import React from "react";
import { render } from "@testing-library/react";
import ScrollTopButton from "../components/SrollTopButton";

describe("ScrollTopButton", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ScrollTopButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders when user scrolls past veiwport height", async () => {
    const { getByTestId } = render(<ScrollTopButton isVisible />);

    expect(getByTestId("scroll-top-button")).toBeVisible();
  });
});
