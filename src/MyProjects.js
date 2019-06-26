import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  sectionHeader: {
    margin: `${theme.spacing(5)}px 0`
  }
}));

export default function MyProjects() {
  const classes = useStyles();
  const projects = [
    {
      imgSrc: "https://media.giphy.com/media/Sr853yy75d4a3Qvseg/giphy.gif",
      imgAlt: "Note App Example",
      title: "Note App",
      desc: "A resposive note application.",
      bullets: [
        "Build with React",
        "UI and animations powered by Material-UI",
        "Fully Responsive"
      ]
    },
    {
      imgSrc: "https://media.giphy.com/media/JrYsmSc1WuVKnEYi1Q/giphy.gif",
      imgAlt: "Matching Game Example",
      title: "Matching Game",
      desc: "An enjoyable matching game.",
      bullets: [
        "Build with React",
        "Animations powered by Animate.css",
        "In game overlay modal created with SweetAlert2"
      ]
    },
    {
      imgSrc: "https://media.giphy.com/media/H3wABNM4j2Eed1MzMP/giphy.gif",
      imgAlt: "Cat Clicker Example",
      title: "Cat Clicker",
      desc:
        "A serie of Github wikis with an example application to help learning Javascript design patterns.",
      bullets: [
        "Highly documented in a serie of 5 sections",
        "No framework used",
        "Many live examples and commits for better learning experience"
      ]
    }
  ];

  return (
    <section>
      <header className={classes.sectionHeader}>
        <Typography variant="h2" align="center">
          # Projects
        </Typography>
      </header>
      {projects.map((project, projectIndex) => (
        <ProjectCard
          key={projectIndex}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          title={project.title}
          desc={project.desc}
          bullets={project.bullets}
        />
      ))}
    </section>
  );
}
