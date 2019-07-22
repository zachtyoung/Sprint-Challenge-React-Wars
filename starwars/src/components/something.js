import React from "react";
import { useState } from "react";
import {Card} from "./card.js";
import '../App.css'

export const Something = props => {

const [jediState, setJediState] = useState(props.jedi)
  return (
    <>
    {
    jediState.map(jediContent => <Card name= {jediContent.name} gender={jediContent.gender} hairColor={jediContent.hair_color} skinColor={jediContent.skin_color} key={jediContent.name}/>)
    }
    </>
  );
};