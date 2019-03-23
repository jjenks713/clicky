import React from "react";

function Score(props) {
  return (
  <ul>
      <li>Score: {props.score}</li>
      <li>Top Score: {props.highScore}</li>
  </ul>
  );
};

export default Score;