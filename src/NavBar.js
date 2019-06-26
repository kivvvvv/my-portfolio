import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  home: {
    textTransform: "uppercase",
    fontWeight: "bold"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Container maxWidth="md">
          <Toolbar>
            <Typography className={classes.home}>Sirapop</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
