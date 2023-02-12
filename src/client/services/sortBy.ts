import { TDataPlayers } from "../../server/data/fixtures/types";
import { TPlayer } from "../views/PlayersList/PlayersList/PlayerCard/types";

const SortBy = (
  data: TDataPlayers["players"],
  key: keyof TPlayer
): TDataPlayers["players"] => {
  const sortedArray = [...data];
  sortedArray.sort((p1, p2) =>
    p1[key] > p2[key] ? 1 : p1[key] < p2[key] ? -1 : 0
  );
  return sortedArray;
};

export default SortBy;
