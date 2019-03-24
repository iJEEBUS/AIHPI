import React, { Component } from 'react';
import Timer from './Timer'
import Progress from './Progress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faClock } from '@fortawesome/free-regular-svg-icons'
import './GamePlay.css'

class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showQuestion: false,
          questions: this.props.questions,
          current: 0,
          isShowing: false,
          finish: this.props.openModal
        };
    }
    answerQuestion=()=>{
      const key = this.state.current;
      const current = this.state.current+1;
      if(current<this.state.questions.length){
        const changedItem = this.state.questions.find(function(value) {
          if (value.key === key) {
            value.answered = true;
            return value;
          }
        });
    
        const newQuestions = this.state.questions.filter(function(value) {
          if (value.key === key) {
            return changedItem;
          } else {
            return value;
          }
        });
        this.setState({
          showQuestion:!this.state.showQuestion,
          current: current,
          questions: newQuestions
        })
      }else{
        this.state.finish()
      }
    }
  render() {
      const questions = this.state.questions;
      const current = this.state.current;
      const showQuestion = this.state.showQuestion;
      const quit = this.props.quit;
      const rounds = this.props.rouds;
    return (
      <div className={ this.state.isShowing ? "back-drop":""}>
        <FontAwesomeIcon icon={faTimesCircle} className="right" size={"2x"} onClick={quit}/>
        <h2>GamePlay</h2>
        <Progress questions={questions}/>
        <div className="Game_data">
            {questions[current].data}
        </div>
        {showQuestion?
        <div>
        <div className="Game_question">
            {questions[current].question}
            <input></input>
            <Timer seconds={questions[current].time}/>
        </div>
        <button className="Game_conferm" onClick={()=>this.answerQuestion()}>Answer</button>
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