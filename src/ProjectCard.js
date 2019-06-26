import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MonitorIcon from "mdi-material-ui/Monitor";
import GithubCircleIcon from "mdi-material-ui/GithubCircle";

const useStyles = makeStyles(theme => ({
  ProjectCard: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    },
    justifyContent: "center",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  imgContainer: {
    maxWidth: "400px",
    fontSize: 0,
    "& img": {
      width: "100%"
    }
  },
  projectContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  projectDetail: {
    maxWidth: "400px",
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      padding: theme.spacing(3)
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  projectActions: {
    display: "flex"
  }
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  const handleDemoClick = () => {
    window.open(props.demoUrl, props.title);
  };

  const handleSourceClick = () => {
    window.open(props.sourceUrl, props.title);
  };

  return (
    <div className={classes.ProjectCard}>
      <div className={classes.imgContainer}>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className={classes.projectContent}>
        <div className={classes.projectDetail}>
          <header>
            <Typography variant="h5">{props.title}</Typography>
          </header>
          <div>
            <Typography>{props.desc}</Typography>
          </div>
          <div>
            <ul>
              {props.bullets.map((bullet, bulletId) => (
                <li key={bulletId}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.projectActions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleDemoClick}
          >
            <MonitorIcon className={classes.leftIcon} />
            Demo
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleSourceClick}
          >
            <GithubCircleIcon className={classes.leftIcon} />
            Source
          </Button>
        </div>
      </div>
    </div>
  );
}
