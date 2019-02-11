import React, { Component } from 'react';
import './Game.css';
import GameSettings from './components/GameSettings'
import GamePlay from './components/GamePlay'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {lifeCycle: "settings"};
  }
  handleStartGamePlay= event =>{
    this.setState(
      {lifeCycle: "GamePlay"}
    );
  }
  handleQuitGamePlay= event =>{
    this.setState(
      {lifeCycle: "settings"}
    );
  }
  render() {
    if(this.state.lifeCycle == "settings"){
    return (
      <div className="Game_container">       
            <GameSettings onChange={this.handleStartGamePlay} />    
      </div>
    );
    }else{
      return (
        <div className="Game_container">
              <GamePlay quit={this.handleQuitGamePlay}/>      
        </div>
      ); 
    }
  }
}

export default Game;