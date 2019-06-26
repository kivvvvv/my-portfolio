import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from "mdi-material-ui/Menu";
import ChevronLeftIcon from "mdi-material-ui/ChevronLeft";
import HomeIcon from "mdi-material-ui/Home";
import MonitorIcon from "mdi-material-ui/Monitor";
import GmailIcon from "mdi-material-ui/Gmail";

import LiquidCheeseSvg from "./Liquid-Cheese.svg";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: `url(${LiquidCheeseSvg}) no-repeat center center fixed;`,
    backgroundSize: "cover"
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1)
    }
  },
  toolbarActions: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  home: {
    flexGrow: 1,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.palette.common.black
  },
  button: {
    margin: theme.spacing(1)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setOpenDrawer(false);
  };

  const handleToggleDrawer = e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={null}
      onKeyDown={null}
    >
      <List>
        <ListItem button onClick={scrollToTop}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          offset={-64}
          smooth={true}
          duration={500}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <ListItem button>
            <ListItemIcon>
              <MonitorIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link
          activeClass="active"
          to="getInTouch"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <ListItem button>
            <ListItemIcon>
              <GmailIcon />
            </ListItemIcon>
            <ListItemText primary="Get in Touch" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Drawer open={openDrawer} onClose={handleToggleDrawer}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleToggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {sideList()}
      </Drawer>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.home}>Sirapop</Typography>
          <div className={classes.toolbarActions}>
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
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
