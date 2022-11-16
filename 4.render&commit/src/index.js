// src/index
import React from "../react";

const element = (
  <div>
    <h1>
      <p />
      <a href="/">bar</a>
    </h1>
    <h2 />
  </div>
);

console.log(element);

React.render(element, document.getElementById("root"));
