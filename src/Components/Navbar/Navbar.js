import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  toolbar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  menuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(5),
    },
    color: "white",
  },
  menuIcon: {
    color: "white",
  },
}));

function Navbar() {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false,
  });

  const { toggleMenu, toggleMenuOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayToggleMenu = () => {
    const handleToggleMenuOpen = () =>
      setState((prevState) => ({
        ...prevState,
        toggleMenuOpen: true,
      }));

    const handleToggleMenuClose = () =>
      setState((prevState) => ({
        ...prevState,
        toggleMenuOpen: false,
      }));
    return (
      <Toolbar>
        <IconButton
          {...{
            onClick: handleToggleMenuOpen,
          }}
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: toggleMenuOpen,
            onClose: handleToggleMenuClose,
          }}
        >
          <div>{getToggleMenuOptions()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getToggleMenuOptions = () => {
    return (
      <Box>
        {["home", "courses", "sign up"].map((menuOption) => (
          <MenuItem component="button" variant="body1">
            {menuOption.toUpperCase()}
          </MenuItem>
        ))}
      </Box>
    );
  };

  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h5" className={classes.siteTitle}>
          AadiZee
        </Typography>
        <Box className={classes.menuBox}>
          {["home", "courses", "sign up"].map((menuOption) => {
            return (
              <Link
                component="button"
                variant="body1"
                className={classes.menuOption}
              >
                {menuOption.toUpperCase()}
              </Link>
            );
          })}
        </Box>
      </Toolbar>
    );
  };

  const classes = useStyles();
  return (
    <Container>
      <AppBar>{toggleMenu ? displayToggleMenu() : displayLargeMenu()}</AppBar>
    </Container>
  );
}

export default Navbar;
