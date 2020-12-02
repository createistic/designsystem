import React from "react";
import { Button } from ".";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("exists", () => {
    expect(Button).toBeTruthy();
  });
  test("With text prop the Button uses it", () => {
    render(<Button text="my button test" />);
    const linkElement = screen.getByText(/my button test/i);
    expect(linkElement).toBeTruthy();
  });
  // test("With no type Button uses primary", () => {
  //   const btn = render(<Button />);
  //   expect(btn).toBeTruthy();
  // });
});
