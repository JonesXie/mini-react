// src/index
import React from "../react";

const element = (
  <div id="foo">
    <a>bar</a>
  </div>
);

console.log(element, "element");

React.render(element, document.getElementById("root"));
