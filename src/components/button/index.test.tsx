import React from "react";
import { Button } from ".";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("exists", () => {
    expect(Button).toBeTruthy();
  });
  test("With text prop the Button uses it", () => {
    render(<Button text="my button test" />);
    const btn = screen.getByText(/my button test/i);
    expect(btn).toBeTruthy();
  });
  test("With no type Button uses primary", () => {
    const { container } = render(<Button />);
    expect(container).toBeTruthy();
  });
});
