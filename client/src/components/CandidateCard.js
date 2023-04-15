import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Candidate({ id, name, voteCount }) {
  const IMG =
    "https://img.freepik.com/free-icon/avatar_318-158392.jpg";

  return (
    <Card style={{ backgroundColor: '#8ED1FC' }} sx={{ maxWidth: 345, minWidth: 300 }}>
      <Avatar
        alt="Rounded Image"
        src={IMG} 
        style={{ height: '125px' , width: '200px', margin: 'auto', display:'block' }}
      />
      <CardContent sx={{  justifyContent: "center" }}>
        <Typography align="center" variant="h5">
          <strong>{name}</strong> 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {voteCount && (
          <Typography align="center" variant="h6">
             Votes : <strong>{voteCount}</strong>
          </Typography>
        )}
      </CardActions>
    </Card>
  );
}

