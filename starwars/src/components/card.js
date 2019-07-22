import React from "react";
import '../App.css';

export const Card = props => {


  return (
   <div className="jedi-card">
       <h1>{props.name}</h1>
       <p>{props.gender}</p>
       <p>Hair Color: {props.hairColor}</p>
       <p>Skin Color: {props.skinColor}</p>
   </div>
  );
};