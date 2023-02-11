import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import PlayersList from "./PlayersList";
import mockPlayers from "./mocks";

describe("PlayersList", () => {
  test("should create a list of player cards", () => {
    const wrapper = render(<PlayersList list={mockPlayers} />);

    expect(wrapper.getAllByTestId("player-card").length).toBe(5);
  });
});
