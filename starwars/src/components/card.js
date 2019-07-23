import React from "react";
import '../App.css';
import styled from 'styled-components';
export const Card = props => {

  const JediCard = styled.div`
  width: 200px;
  background: #f8f8f8;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 1px 20px 33px 3px rgba(0,0,0,0.2);
  :last-child{
    grid-column: 2;
  }
  `;



  return (
   <JediCard>
       <h1>{props.name}</h1>
       <p>{props.gender}</p>
       <p>Hair Color: {props.hairColor}</p>
       <p>Skin Color: {props.skinColor}</p>
   </JediCard>
  );
};