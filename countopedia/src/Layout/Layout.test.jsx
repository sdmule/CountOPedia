import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import Footer from "./footer";
import Header from "./header";

describe("Header", () => {
  test("renders the app name and logo", () => {
    const { container } = render(<Header />);

    expect(screen.getByText("CountOPedia")).toBeInTheDocument();
    expect(container.querySelector("img")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  test("renders the coding sign-off", () => {
    render(<Footer />);

    expect(screen.getByText("Happy Coding @sdmule")).toBeInTheDocument();
  });
});
