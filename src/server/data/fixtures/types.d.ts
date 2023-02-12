export type TDataPlayers = {
  players: TPlayer[];
};

type TPlayer = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  picture: string;
  data: TPlayerData;
  country: TPlayerCountry;
};

type TPlayerData = {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
};

type TPlayerCountry = {
  picture: string;
  code: string;
};
