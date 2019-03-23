import React from "react";

function ContainerFluid(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default ContainerFluid;
