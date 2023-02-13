import express from "express";
import ViteExpress from "vite-express";
import callRemoteApi from "./services/callRemoteApi";
import { TPlayer } from "./data/types";

const app = express();

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

app.get("/players", async (req, res) => {
  const playersList = await callRemoteApi();
  res.send(res.json(playersList));
});

app.get("/players/:id", async (req, res) => {
  const playerId = req.params.id;
  const playersList = await callRemoteApi();

  const player = playersList.find(
    (x: TPlayer) => x.id == (playerId as unknown as number)
  );

  if (player) {
    res.send(res.json(player));
  } else {
    res.status(404).json({
      error: `Could not find player with id : ${playerId}`,
    });
  }
});
