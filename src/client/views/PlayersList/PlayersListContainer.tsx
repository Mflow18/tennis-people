import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PlayersList from "./PlayersList/PlayersList";
import sortBy from "../../services/sortBy";
import axios from "axios";

const PlayersListContainer = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get("/players").then((response) => setData(response.data));
  }, []);

  return (
    <>
      {data ? (
        <PlayersList list={sortBy(data, "id")} />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default PlayersListContainer;
