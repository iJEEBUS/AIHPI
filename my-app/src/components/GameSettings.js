import React, { Component } from 'react';

class GameSettings extends Component {
  render() {
      const onChange = this.props.onChange;
    return (
      <div>
        <h2>Settings</h2>
        <div className="Game_settings">
        option1
        <input type="range" min="1" max="10" placeholder="5" />
        option2
        <input type="range" min="1" max="10" placeholder="5" />
        option3
        <input type="range" min="1" max="10" placeholder="5" />
        </div>
        <br/>
        <button className="Game_conferm" onClick={onChange}>Go</button>
      </div>
    );
  }
}

export default GameSettings;