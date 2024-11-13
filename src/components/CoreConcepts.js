import React from "react";

export default function CoreConcepts(props) {
    return (
      <li>
        <img src={props.img} alt="" className={props.className} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }