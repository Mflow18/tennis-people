import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./PlayerCard.scss";
import { TPlayer } from "./types";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const PlayerCard = ({
  firstname,
  lastname,
  shortname,
  sex,
  country,
  data,
}: TPlayer) => {
  const { points, height, weight, age } = data;
  const { picture, code } = country;

  return (
    <Card className={"playerCard"} sx={{ minWidth: 275 }}>
      <CardContent>
        <CardMedia
          className={"playerCard-image"}
          component="img"
          height="140"
          image={picture}
          alt={`${code}'s flag`}
        />
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {firstname} {shortname} {lastname}
        </Typography>
        <Typography variant="body2">Gender: {sex}</Typography>

        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rank: {data.rank}
        </Typography>
        <div className={"playerCard-stats"}>
          <Typography variant="h5" component="div">
            Stats
          </Typography>
          <Typography variant="body2">Points: {points}</Typography>
          <Typography variant="body2">Height: {height}</Typography>
          <Typography variant="body2">Weight: {weight}</Typography>
          <Typography variant="body2">Age: {age} years old</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
