import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PdfBoxIcon from "mdi-material-ui/PdfBox";
import GmailIcon from "mdi-material-ui/Gmail";
import GithubCircleIcon from "mdi-material-ui/GithubCircle";
import CloseIcon from "mdi-material-ui/Close";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles(theme => ({
  GetInTouch: {
    padding: `${theme.spacing(6)}px 0`,
    [theme.breakpoints.up("sm")]: {
      height: "35vh"
    }
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
    margin: `${theme.spacing(1)}px  ${theme.spacing(3)}px`,
    "& svg": {
      fontSize: "3rem"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  close: {
    padding: theme.spacing(0.5)
  }
}));

export default function GetInTouch() {
  const classes = useStyles();

  const [copied, setCopied] = useState(false);

  const handleSnackBarCloseClick = () => {
    setCopied(false);
  };

  return (
    <section id="getInTouch" className={classes.GetInTouch}>
      <Container maxWidth="md">
        <header className={classes.sectionHeader}>
          <Typography variant="h2" align="center">
            # Get in Touch
          </Typography>
        </header>
        <div className={classes.contactListContainer}>
          <Tooltip placement="top" title="Click to View my Resume">
            <Fab
              variant="extended"
              color="primary"
              aria-label="View my Resume"
              className={classes.fab}
              onClick={() =>
                window.open(
                  "https://novoresume.com/a/kivistheslayer.1",
                  "Sirapop's Resume"
                )
              }
            >
              <PdfBoxIcon className={classes.extendedIcon} />
              View my Resume
            </Fab>
          </Tooltip>
          <CopyToClipboard
            text="sirapop.iam.0131@gmail.com"
            onCopy={() => setCopied(true)}
          >
            <Tooltip placement="top" title="Click to Copy my Email">
              <Fab
                variant="extended"
                color="primary"
                aria-label="Copy my Email"
                className={classes.fab}
              >
                <GmailIcon className={classes.extendedIcon} />
                Copy my Email
              </Fab>
            </Tooltip>
          </CopyToClipboard>
          <Tooltip placement="top" title="Click to Go to my Github">
            <Fab
              variant="extended"
              color="primary"
              aria-label="Go to my Github"
              className={classes.fab}
              onClick={() =>
                window.open(
                  "https://github.com/kivvvvv/",
                  "Sirapop's Github Page"
                )
              }
            >
              <GithubCircleIcon className={classes.extendedIcon} />
              Go to my Github
            </Fab>
          </Tooltip>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={copied}
            autoHideDuration={6000}
            onClose={handleSnackBarCloseClick}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={
              <span id="message-id">Email is copied to the Clip Board</span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={handleSnackBarCloseClick}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
