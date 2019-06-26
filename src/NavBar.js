import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography className={classes.home}>Sirapop</Typography>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={scrollToTop}
          >
            Home
          </Button>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            offset={-64}
            smooth={true}
            duration={500}
          >
            <Button variant="outlined" className={classes.button}>
              Projects
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="getInTouch"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button variant="outlined" className={classes.button}>
              Get in Touch
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
