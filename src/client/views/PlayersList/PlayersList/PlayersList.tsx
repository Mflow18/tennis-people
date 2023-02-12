import React from "react";
import PlayerCard from "../../shared_components/PlayerCard/PlayerCard";
import "./PlayersList.scss";
import { TPlayersList } from "./types";

const PlayersList: React.FC<TPlayersList> = ({ list }: TPlayersList) => {
  return (
    <>
      <div className="players-list-container">
        {list.map((player) => {
          return <PlayerCard key={`player-card-${player.id}`} {...player} />;
        })}
      </div>
    </>
  );
};

export default PlayersList;
