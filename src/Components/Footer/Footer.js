import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography>
      Copyright &nbsp;
      <Link href="https://github.com/AadiZee">Aadi</Link>
      &nbsp; {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="h6">AadiZee</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Anyone can learn to code.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

export default Footer;
