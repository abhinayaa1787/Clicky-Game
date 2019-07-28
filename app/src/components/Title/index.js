import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
    <span className="title">{props.title}</span>
    <span className="correct">{props.correct}</span>
    <span className="topScore">Top score:{props.topScore}</span>
    <span className="score">Your score:{props.score}</span>




    </div >
  )
}

export default Title;
