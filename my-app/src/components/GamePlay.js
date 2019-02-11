import React, { Component } from 'react';

class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {showQuestion: false};
    }
  render() {
      const showQuestion = this.state.showQuestion;
      const quit = this.props.quit;
    return (
      <div>
        <h2>GamePlay</h2>
        <div className="Game_data">
            data
        </div>
        {showQuestion?
        <div>
        <div className="Game_question">
            Question
        </div>
        <button className="Game_conferm" onClick={()=>this.setState({showQuestion:!showQuestion})}>Answer</button>
        </div>
        :
        <div className="Game_question">
            <button className="Game_conferm" onClick={()=>this.setState({showQuestion:!showQuestion})}>Ready</button>
        </div>}
        <button className="Game_conferm" onClick={quit}>Quit</button>
      </div>
    );
  }
}

export default GamePlay;