import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { EmoticonCoolOutlineIcon } from "components/SvgIcons";

import LiquidCheeseSvg from "static/assets/images/Liquid-Cheese.svg";

const useStyles = makeStyles(theme => ({
  heroContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  emoticon: {
    fontSize: "120%",
    verticalAlign: "middle"
  },
  highLight: {
    padding: theme.spacing(0.5),
    background: `url(${LiquidCheeseSvg}) no-repeat top right fixed;`,
    backgroundSize: "cover",
    borderRadius: theme.spacing(2)
  }
}));

export default function SayHi() {
  const classes = useStyles();

  return (
    <section id="home">
      <Container maxWidth="md">
        <div className={classes.heroContent}>
          <Typography component="h2" variant="h4" align="center" gutterBottom>
            Hi, my name is
          </Typography>
          <Typography component="h2" variant="h2" align="center" gutterBottom>
            Sirapop
          </Typography>
          <Typography component="h2" variant="h4" align="center" gutterBottom>
            And I'm going to be
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            align="center"
            gutterBottom
            className={classes.highLight}
          >
            a front-end developer{" "}
            <EmoticonCoolOutlineIcon className={classes.emoticon} />
          </Typography>
        </div>
      </Container>
    </section>
  );
}
