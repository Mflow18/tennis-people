import express from "express";
import ViteExpress from "vite-express";
import headToHead from "./data/fixtures/headtohead.json";

const app = express();

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

app.get("/players", (req, res) => {
  res.send(res.json(headToHead.players));
});

app.get("/players/:id", (req, res) => {
  const playerId = req.params.id;
  const player = headToHead.players.find(
    (x) => x.id == (playerId as unknown as number)
  );

  if (player) {
    res.send(res.json(player));
  } else {
    res.status(404).json({
      error: `Could not find player with id : ${playerId}`,
    });
  }
});
