import React, { useState } from "react";
import "./PlayersList.scss";
import { TPlayersList } from "./types";
import PlayerCard from "./PlayerCard/PlayerCard";

const PlayersList: React.FC<TPlayersList> = ({ list }: TPlayersList) => {
  return (
    <>
      <div className="playersList-container">
        {list.map((player) => {
          return <PlayerCard key={`player-card-${player.id}`} {...player} />;
        })}
      </div>
    </>
  );
};

export default PlayersList;
