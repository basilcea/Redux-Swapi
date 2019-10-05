import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";
import styled from 'styled-components'
import background from './assets/sw-bg.jpg'

const Div = styled.div `
  background-image:url(${background});
  background-size:cover;
  position:absolute;
  width:100%;
  min-height:100vh;
`;
class App extends Component {
  render() {
    return <Div><CharacterListView /></Div>;
  }
}

export default App;
