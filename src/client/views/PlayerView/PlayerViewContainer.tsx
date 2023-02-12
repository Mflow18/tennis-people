import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import PlayerCard from "../PlayersList/PlayersList/PlayerCard/PlayerCard";
import { TPlayer } from "../PlayersList/PlayersList/PlayerCard/types";
import axios from "axios";

const PlayerViewContainer = () => {
  const [data, setData] = useState<TPlayer | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/players/${id}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, []);

  return (
    <>
      {data ? (
        <PlayerCard {...data} />
      ) : (
        <div className="circular-progress">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default PlayerViewContainer;
