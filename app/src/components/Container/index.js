import React from "react";
import "./style.css";

function Container(props) {
  return <div className="cardContainer">{props.children}</div>;
}

export default Container;
