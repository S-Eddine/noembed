import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Bookmarks index", () => {
  it("Shoud display title and url input with submit button", () => {
    render(<App />);
    expect(screen.getByTestId("bookmarks.app.url.input")).toBeInTheDocument();
    expect(screen.getByTestId("bookmarks.app.url.submit")).toBeInTheDocument();
  });
});
