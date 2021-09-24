import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles(() => ({
  cardImage: {
    height: 300,
  },
}));

function GridItem(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={props.title} subheader="Recommended for you!" />
      <CardMedia
        className={classes.cardImage}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Visit Page">
          <ArrowForward></ArrowForward>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default GridItem;
