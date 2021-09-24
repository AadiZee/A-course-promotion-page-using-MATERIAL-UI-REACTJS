import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 400,
    backgroundImage:
      "url(https://www.did-web.com/wp-content/uploads/2020/05/programador_ordenador_difuminado.png)",
    color: theme.palette.common.white,
    backgroundSize: "cover",
  },
  mainItem: {
    padding: theme.spacing(6),
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

function MainGridItem() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem} md={6}>
        <Typography component="h2" variant="h4">
          <b>Hello Coding</b>
        </Typography>
        <Typography variant="body1" paragraph>
          <b>
            Do you want to learn to code? Smash your career goals. Build
            websites, games, apps and artificial intelligence projects in 99
            days.
          </b>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default MainGridItem;
