import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./PlayerCard.scss";
import { TPlayer } from "./types";

const PlayerCard = ({
  firstname,
  lastname,
  shortname,
  sex,
  picture,
  data,
}: TPlayer) => {
  const { points, height, weight, age } = data;

  const formatHeight = (height: number): string => {
    return (height / 100).toString().replace(".", "m");
  };

  return (
    <Card
      data-testid="player-card"
      className={"player-card"}
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <CardMedia
          data-testid={"player-card-image"}
          className={"player-card-image"}
          component="img"
          height="140"
          image={picture}
          alt={`${firstname} ${lastname}'s avatar picture`}
        />
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {firstname} {shortname} {lastname}
        </Typography>
        <Typography variant="body2">Gender: {sex}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rank: {data.rank}
        </Typography>
        <div className={"player-card-stats"}>
          <Typography variant="h5" component="div">
            Stats
          </Typography>
          <Typography variant="body2">Points: {points}</Typography>
          <Typography variant="body2">
            Height: {formatHeight(height)}
          </Typography>
          <Typography variant="body2">Weight: {weight / 1000} kg</Typography>
          <Typography variant="body2">Age: {age} years old</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
