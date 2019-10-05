import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { CharacterList } from "../components";
// import actions
import * as actions from '../actions/index';
import backgrounds from '../assets/star-wars.gif'

const Divs = styled.div`
background-image: url(${backgrounds});
background-color: inherit;
opacity:.5;
border-radius:50%;
width:100%;
height:80vh;
background-size:contain;
background-position: center center;
background-repeat:no-repeat;`;

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchchar()
  }

  render() {
    if (this.props.fetching) {
      return(
        <Divs>
        </Divs>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
function mapStateToProps( state ){
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  };
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps ,
  {fetchchar: actions.fetching}
)(CharacterListView);
