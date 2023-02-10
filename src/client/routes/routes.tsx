import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayersListContainer from "../views/PlayersList/PlayersListContainer";

const RoutesComponent: React.FC<any> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayersListContainer />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
