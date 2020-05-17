import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { LanguageHtml5Icon, LanguageCss3Icon, ReactIcon } from "components/SvgIcons";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  MyProjects: {
    padding: `${theme.spacing(6)}px 0`,
    backgroundColor: "#eaeaea"
  },
  sectionHeader: {
    marginBottom: theme.spacing(6)
  },
  chip: {
    margin: theme.spacing(1)
  },
  myTechStack: {
    marginBottom: theme.spacing(3)
  },
  techStack: {
    display: "flex",
    justifyContent: "center"
  },
  projects: {
    display: "flex",
    flexDirection: "column"
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
      ],
      demoUrl: "https://sirapop-note-app.netlify.com/",
      sourceUrl: "https://github.com/kivvvvv/note-app"
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
      ],
      demoUrl: "https://sirapop-matching-game.netlify.com/",
      sourceUrl: "https://github.com/kivvvvv/matching-game"
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
      ],
      demoUrl: "https://github.com/kivvvvv/cat-clicker/wiki",
      sourceUrl: "https://github.com/kivvvvv/cat-clicker"
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
        <div className={classes.myTechStack}>
          <Typography variant="h4" align="center">
            My Tech Stack
          </Typography>
          <div className={classes.techStack}>
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
          </div>
        </div>
        <div>
          {projects.map((project, projectIndex) => (
            <ProjectCard
              key={projectIndex}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              title={project.title}
              desc={project.desc}
              bullets={project.bullets}
              demoUrl={project.demoUrl}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
