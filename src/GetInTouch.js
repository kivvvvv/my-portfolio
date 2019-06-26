import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
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
  fab: {
    margin: theme.spacing(3),
    "& svg": {
      fontSize: "3rem"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function GetInTouch() {
  const classes = useStyles();
  return (
    <section id="getInTouch" className={classes.GetInTouch}>
      <Container maxWidth="md">
        <header className={classes.sectionHeader}>
          <Typography variant="h2" align="center">
            # Get in Touch
          </Typography>
        </header>
        <div className={classes.contactListContainer}>
          <Tooltip placement="top" title="View my Resume">
            <Fab
              color="primary"
              aria-label="View my Resume"
              className={classes.fab}
            >
              <PdfBoxIcon />
            </Fab>
          </Tooltip>
          <Tooltip placement="top" title="Copy my Email">
            <Fab
              variant="extended"
              aria-label="Copy my Email"
              className={classes.fab}
            >
              <GmailIcon className={classes.extendedIcon} />
              Copy my Email
            </Fab>
          </Tooltip>
          <Tooltip placement="top" title="Go to my Github">
            <Fab
              color="primary"
              aria-label="Go to my Github"
              className={classes.fab}
            >
              <GithubCircleIcon />
            </Fab>
          </Tooltip>

          {/* <Chip
            variant="outlined"
            icon={<PdfBoxIcon />}
            label="My resume"
            className={classes.chip}
            clickable
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
          /> */}
        </div>
      </Container>
    </section>
  );
}
