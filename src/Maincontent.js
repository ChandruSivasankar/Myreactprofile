import React from "react";
import advisor from "./assets/components.png";
import edu from "./assets/jsx-ui.png";
import skill from "./assets/state-mgmt.png";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";

export default function Maincontent() {
  const [selectedValue, setSelectedValue] = useState();
  let tabContent = <p>Please select a tab</p>;
  const uni = <FontAwesomeIcon icon={faUniversity} />;
  {
    /* Conditional content rending*/
  }
  if (selectedValue) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedValue].title}</h3>
        <p>{EXAMPLES[selectedValue].description}</p>
        <pre>
          <code>{EXAMPLES[selectedValue].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(onselect) {
    console.log(onselect);
    setSelectedValue(onselect);
  }
  return (
    <main>
      <section id="core-concepts">
        <h2>Career and Education</h2>
        <ul>
          {CORE_CONCEPTS.map((coreItems) => (
            <CoreConcepts key={coreItems.title} {...coreItems} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <menu>
          <TabButton
            isSelected={selectedValue === "Books"}
            onSelect={() => handleSelect("Books")}
          >
            Books
          </TabButton>
          <TabButton
            isSelected={selectedValue === "Projects"}
            onSelect={() => handleSelect("Projects")}
          >
            Projects
          </TabButton>
          <TabButton
            isSelected={selectedValue === "Credentials"}
            onSelect={() => handleSelect("Credentials")}
          >
            Credentials
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
  );
}
