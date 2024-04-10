import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ src, head, body }) {
  return (
    <Card className="h-96" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className="h-48"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {head}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
