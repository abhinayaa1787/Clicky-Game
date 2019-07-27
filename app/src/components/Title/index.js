import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
    <span className="title">{props.title}</span>
    <span >You chose Correctly</span>
    <span>You chose incorrectly</span>
    <span className="score">Your score:{props.score}</span>
    </div >
  )
}

export default Title;
