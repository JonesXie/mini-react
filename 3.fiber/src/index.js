// src/index
import React from "../react";

const element = (
  <div id="el">
    <h1>react</h1>
    <h2 />
  </div>
);

console.log(element);

React.render(element, document.getElementById("root"));
