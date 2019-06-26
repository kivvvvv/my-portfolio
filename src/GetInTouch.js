import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PdfBoxIcon from "mdi-material-ui/PdfBox";
import GmailIcon from "mdi-material-ui/Gmail";
import GithubCircleIcon from "mdi-material-ui/GithubCircle";

const useStyles = makeStyles(theme => ({
  GetInTouch: {
    height: "35vh"
  },
  sectionHeader: {
    margin: `${theme.spacing(5)}px 0`
  },
  contactListContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export default function GetInTouch() {
  const classes = useStyles();
  return (
    <section className={classes.GetInTouch}>
      <header className={classes.sectionHeader}>
        <Typography variant="h2" align="center">
          # Get in Touch
        </Typography>
      </header>
      <div className={classes.contactListContainer}>
        <Chip
          variant="outlined"
          icon={<PdfBoxIcon />}
          label="My resume"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          icon={<GmailIcon />}
          label="sirapop.iam.0131@gmail.com"
          className={classes.chip}
        />
        <Chip
          variant="outlined"
          icon={<GithubCircleIcon />}
          label="github.com/kivvvvv"
          className={classes.chip}
        />
      </div>
    </section>
  );
}
