import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PlayerCard from "./PlayerCard";
import mockPlayers from "../mocks";

describe("PlayerCard", () => {
  const wrapper = render(<PlayerCard {...mockPlayers[0]} />);

  test("should display name", () => {
    expect(screen.queryByText("Novak N.DJO Djokovic")).toBeTruthy;
  });

  test("should display image", () => {
    expect(screen.queryByTestId("player-card-image")).toBeTruthy;
  });

  test("should display rank", () => {
    expect(screen.queryByText("Rank: 1")).toBeTruthy;
  });

  test("should display stats", () => {
    expect(screen.queryByText("Stats")).toBeTruthy;
  });

  test("should format age, height and weight", () => {
    expect(screen.queryByText("Height: 1m88")).toBeTruthy;
    expect(screen.queryByText("Weight: 80 kg")).toBeTruthy;
    expect(screen.queryByText("Age: 31 years old")).toBeTruthy;
  });
});
