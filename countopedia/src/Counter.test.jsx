import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, jest, test } from "@jest/globals";
import Counter from "./Counter";

function attackImage() {
  return screen.getAllByRole("img")[0];
}

function defendImage() {
  return screen.getAllByRole("img")[1];
}

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Counter", () => {
  test("starts at zero and updates the score from the attack and defend images", () => {
    render(<Counter />);

    expect(
      screen.getByRole("heading", { name: "Game Score:0" }),
    ).toBeInTheDocument();

    fireEvent.click(attackImage());
    expect(
      screen.getByRole("heading", { name: "Game Score:1" }),
    ).toBeInTheDocument();

    fireEvent.click(defendImage());
    expect(
      screen.getByRole("heading", { name: "Game Score:0" }),
    ).toBeInTheDocument();
  });

  test("keeps the win at five points and clears it when the score drops below five", () => {
    render(<Counter />);

    for (let clickCount = 0; clickCount < 6; clickCount += 1) {
      fireEvent.click(attackImage());
    }

    fireEvent.click(defendImage());
    expect(screen.getByText("Game Status : You Won!")).toBeInTheDocument();

    fireEvent.click(defendImage());
    expect(
      screen.queryByText("Game Status : You Won!"),
    ).not.toBeInTheDocument();
  });

  test("shows a loss at negative five points", () => {
    render(<Counter />);

    for (let clickCount = 0; clickCount < 6; clickCount += 1) {
      fireEvent.click(defendImage());
    }
    fireEvent.click(attackImage());

    expect(screen.getByText("Game Status : You Lost")).toBeInTheDocument();
  });

  test("random play increments when the random value rounds to zero", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.2);
    render(<Counter />);

    fireEvent.click(screen.getByRole("button", { name: "Random Play" }));

    expect(
      screen.getByRole("heading", { name: "Game Score:1" }),
    ).toBeInTheDocument();
  });

  test("random play decrements when the random value rounds to one", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.8);
    render(<Counter />);

    fireEvent.click(screen.getByRole("button", { name: "Random Play" }));

    expect(
      screen.getByRole("heading", { name: "Game Score:-1" }),
    ).toBeInTheDocument();
  });

  test("reset returns the score and game status to their initial state", () => {
    render(<Counter />);

    for (let clickCount = 0; clickCount < 5; clickCount += 1) {
      fireEvent.click(attackImage());
    }
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(
      screen.getByRole("heading", { name: "Game Score:0" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Game Status : You Won!"),
    ).not.toBeInTheDocument();
  });

  test("logs the current score", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<Counter />);
    fireEvent.click(attackImage());

    fireEvent.click(screen.getByRole("button", { name: "Log" }));

    expect(logSpy).toHaveBeenCalledWith(1);
  });
});
