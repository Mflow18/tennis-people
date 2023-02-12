import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayersListContainer from "../views/PlayersList/PlayersListContainer";
import PlayerViewContainer from "../views/PlayerView/PlayerViewContainer";

const RoutesComponent: React.FC<any> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayersListContainer />} />
        <Route path="/:id" element={<PlayerViewContainer />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
