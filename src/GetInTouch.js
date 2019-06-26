import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PdfBoxIcon from "mdi-material-ui/PdfBox";
import GmailIcon from "mdi-material-ui/Gmail";
import GithubCircleIcon from "mdi-material-ui/GithubCircle";

const useStyles = makeStyles(theme => ({
  GetInTouch: {
    padding: `${theme.spacing(6)}px 0`,
    height: "35vh"
  },
  sectionHeader: {
    marginBottom: theme.spacing(6)
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
      <Container maxWidth="md">
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
      </Container>
    </section>
  );
}
