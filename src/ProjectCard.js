import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  ProjectCard: {
    display: "flex",
    justifyContent: "center",
    padding: "8px",
    margin: "8px"
  },
  imgContainer: {
    width: "25vw",
    maxWidth: "400px",
    backgroundColor: "grey"
  },
  projectDetail: {
    width: "25vw",
    maxWidth: "400px",
    marginLeft: "16px",
    padding: "8px"
  },
  projectTitle: {},
  projectDesc: {},
  projectBullet: {}
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.imgContainer}>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className={classes.projectDetail}>
        <header className={classes.projectTitle}>
          <Typography variant="h5">{props.title}</Typography>
        </header>
        <div className={classes.projectDesc}>
          <Typography>{props.desc}</Typography>
        </div>
        <div className={classes.projectBullet}>
          <ul>
            {props.bullets.map(bullet => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
