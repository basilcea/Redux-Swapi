import React from "react";
import styled from 'styled-components';


import Character from "./Character";
const Ul = styled.ul `
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    width:80%;
    margin:5% 10%;
    h1{
      text-align:center;
    }
`;
const CharacterList = props => {
  return (
    <Ul>
    <h1>StarWars List</h1>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </Ul>
  );
};

export default CharacterList;
