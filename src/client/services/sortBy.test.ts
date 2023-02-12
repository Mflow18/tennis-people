import { describe, it } from "vitest";
import { mockPlayersArray } from "./mocks";
import sortBy from "./sortBy";

describe("sortBy", () => {
  it("sorts array with given param", () => {
    const expectedById = [17, 52, 65, 95, 102];
    const sortedById = sortBy(mockPlayersArray, "id");

    expect(sortedById.map((player) => player.id)).toEqual(expectedById);
  });

  it("sorts array with given param", () => {
    const expectedByName = [
      "Djokovic",
      "Nadal",
      "Wawrinka",
      "Williams",
      "Williams",
    ];
    const sortedByName = sortBy(mockPlayersArray, "lastname");

    expect(sortedByName.map((player) => player.lastname)).toEqual(
      expectedByName
    );
  });
});
