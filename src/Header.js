import React from "react";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header>
      {/* <img src={logo} https://dev.to/chandrusivasankar /> */}
      <h1>Chandru Sivasankar</h1>
      <p>Solution Architect | AWS | FullStack Developer | RPA</p>
      <p>
        <a className="fa-icon" href="https://github.com/ChandruSivasankar">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="fa-icon" href="https://x.com/Chan_bob">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          className="fa-icon"
          href="https://www.linkedin.com/in/sivaramachandru"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="fa-icon" href="https://dev.to/chandrusivasankar">
          <FontAwesomeIcon icon={faDev} />
        </a>
      </p>
    </header>
  );
}
