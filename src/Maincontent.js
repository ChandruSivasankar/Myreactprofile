import React from "react";
import advisor from "./assets/components.png";
import edu from "./assets/jsx-ui.png";
import skill from "./assets/state-mgmt.png";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

export default function Maincontent() {
  function handleSelect(onselect) {
    console.log(onselect);
  }
  return (
    <main>
      <section id="core-concepts">
        <h2>Career and Education</h2>
        <ul>
          <CoreConcepts title="Education" img={advisor} description="TBD" />
          <CoreConcepts img={edu} title="Career" description="TBD" />
          <CoreConcepts img={skill} title="Skills" description="TBD" />
        </ul>
      </section>
      <section id="examples">
        <menu>
          <TabButton onSelect={() => handleSelect("Books")}>Books</TabButton>
          <TabButton onSelect={() => handleSelect("Projects")}>
            Projects
          </TabButton>
          <TabButton onSelect={() => handleSelect("Credentials")}>
            Credentials
          </TabButton>
        </menu>
      </section>
    </main>
  );
}
