import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PlayersList from "./PlayersList/PlayersList";
import sortBy from "../../services/sortBy";

const ExerciseListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setData(data.data));
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

export default ExerciseListContainer;
