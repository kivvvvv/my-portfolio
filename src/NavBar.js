import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

import LiquidCheeseSvg from "./Liquid-Cheese.svg";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: `url(${LiquidCheeseSvg}) no-repeat center center fixed;`,
    backgroundSize: "cover"
  },
  home: {
    flexGrow: 1,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.palette.common.black
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography className={classes.home}>Sirapop</Typography>
          <Button variant="outlined" className={classes.button}>
            Home
          </Button>
          <Button variant="outlined" className={classes.button}>
            Projects
          </Button>
          <Button variant="outlined" className={classes.button}>
            Get in Touch
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
