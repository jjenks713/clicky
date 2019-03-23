import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? " mt-5" : ""}`}>{props.children}</div>;
}

export default Container;
