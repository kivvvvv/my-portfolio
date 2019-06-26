import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  heroContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SayHi() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <div>
        <Typography component="h2" variant="h4" align="center">
          Hi, my name is
        </Typography>
        <Typography component="h2" variant="h2" align="center">
          Sirapop
        </Typography>
        <Typography component="h2" variant="h4" align="center">
          And I'm going to be
        </Typography>
        <Typography component="h2" variant="h4" align="center">
          a front-end developer!
        </Typography>
      </div>
    </div>
  );
}
