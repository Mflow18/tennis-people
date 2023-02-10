import express from "express";
import ViteExpress from "vite-express";
import headToHead from "./data/fixtures/headtohead.json";

const app = express();

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

app.get("/players", (_, res) => {
  res.send(res.json({ data: headToHead }));
});
