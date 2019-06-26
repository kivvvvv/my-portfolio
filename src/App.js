import React from "react";
import Container from "@material-ui/core/Container";

import NavBar from "./NavBar";
import SayHi from "./SayHi";
import MyProjects from "./MyProjects";
import GetInTouch from "./GetInTouch";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Container maxWidth="md">
          <SayHi />
          <MyProjects />
          <GetInTouch />
        </Container>
      </main>
    </div>
  );
}
