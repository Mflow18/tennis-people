export type TPlayer = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: TPlayerCountry;
  data: TPlayerData;
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
