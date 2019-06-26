import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LanguageHtml5Icon from "mdi-material-ui/LanguageHtml5";
import LanguageCss3Icon from "mdi-material-ui/LanguageCss3";
import ReactIcon from "mdi-material-ui/React";

import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  MyProjects: {
    padding: `${theme.spacing(6)}px 0`,
    backgroundColor: "#e6e6e6"
  },
  sectionHeader: {
    marginBottom: theme.spacing(6)
  },
  chip: {
    margin: theme.spacing(1)
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
    <section id="projects" className={classes.MyProjects}>
      <Container maxWidth="md">
        <header className={classes.sectionHeader}>
          <Typography variant="h2" align="center">
            # Projects
          </Typography>
        </header>
        <div>
          <Typography variant="h5" align="center">
            Tech Stack:
            <Chip
              color="primary"
              icon={<LanguageHtml5Icon />}
              label="HTML"
              className={classes.chip}
            />
            <Chip
              color="primary"
              icon={<LanguageCss3Icon />}
              label="CSS"
              className={classes.chip}
            />
            <Chip
              color="primary"
              icon={<ReactIcon />}
              label="React"
              className={classes.chip}
            />
          </Typography>
        </div>
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
      </Container>
    </section>
  );
}
