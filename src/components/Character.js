import React from "react";
import styled from 'styled-components';

const Li = styled.div`
    display:flex;
    flex-direction:column;
    background-color:inherit;
    margin:2% 15%;
    padding-bottom:1%;
    width:70%;
    min-height:5vh;
    border:1px solid black;
    border-radius:10px;
    background-color: rgba(205, 134, 63, 0.486);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    justify-content:space-evenly;
    align-items: center;
   `;

const Character = props => {
  return <Li>{props.character.name}</Li>;
};

export default Character;
