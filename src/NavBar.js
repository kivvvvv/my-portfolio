import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
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
        <Toolbar>
          <Typography className={classes.home}>Sirapop Iam-o-pas</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
