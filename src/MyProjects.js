import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function MyProjects() {
  const projects = [
    {
      imgSrc: null,
      imgAlt: null,
      title: "title1",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      bullets: [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text"
      ]
    },
    {
      imgSrc: null,
      imgAlt: null,
      title: "title2",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      bullets: [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text"
      ]
    },
    {
      imgSrc: null,
      imgAlt: null,
      title: "title3",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      bullets: [
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text",
        "Lorem Ipsum is simply dummy text"
      ]
    }
  ];

  return (
    <Container maxWidth="md">
      {projects.map(project => (
        <ProjectCard
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          title={project.title}
          desc={project.desc}
          bullets={project.bullets}
        />
      ))}
    </Container>
  );
}
