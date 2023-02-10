import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PlayersList from "./PlayersList/PlayersList";

const ExerciseListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/players")
      .then((res) => res.json())
      .then((data) => setData(data.data.players));
  }, []);
  console.log(data);
  return (
    <>
      {data ? (
        <PlayersList list={data} />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default ExerciseListContainer;
