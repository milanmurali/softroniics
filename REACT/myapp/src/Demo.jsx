import React from "react";
import "./demo.css";

export const Demo = (props) => {
  return (
        <div className="cards">
            <h1>Person {props.id}</h1>
            <img src={props.image} />
            <h2>Name : {props.name}</h2>
            <h2>Age : {props.age}</h2>
        </div>
  );
};
