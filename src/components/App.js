import React from "react";

import NavBar from "components/NavBar";
import SayHi from "components/SayHi";
import MyProjects from "components/MyProjects";
import GetInTouch from "components/GetInTouch";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <SayHi />
        <MyProjects />
        <GetInTouch />
      </main>
    </div>
  );
}
