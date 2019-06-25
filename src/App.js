import React from "react";

import NavBar from "./NavBar";
import SayHi from "./SayHi";
import MyProjects from "./MyProjects";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <SayHi />
        <MyProjects />
      </main>
    </div>
  );
}
