import React, { Component } from 'react';
import SingleSelect from './SingleSelect';

class GameSettings extends Component {
  getYearOptions = (year) =>{
    const yearOptions = [{key:1,content:"1",selected:false},{key:2,content:"2",selected:false},{key:3,content:"3",selected:false}]
    const setYearOptions = yearOptions.filter(function(option){
      if(option.content == year){
        option.selected =true;
      }
      return option;
    });
    return setYearOptions;
  }
  getDifficultyOptions = (difficulty) =>{
    const difficultyOptions = [{key:1,content:"e",selected:false},{key:2,content:"m",selected:false},{key:3,content:"h",selected:false}]
    const setDifficultyOptions = difficultyOptions.filter(function(option){
      if(option.content == difficulty){
        option.selected =true;
      }
      return option;
    });
    return setDifficultyOptions;
  }
  getAmountOptions = (amount) =>{
    const amountOptions = [{key:1,content:"1",selected:false},{key:2,content:"3",selected:false},{key:3,content:"5",selected:false}]
    const setamountOptions = amountOptions.filter(function(option){
      if(option.content == amount){
        option.selected =true;
      }
      return option;
    });
    return setamountOptions;
  }
  render() {
      const onChange = this.props.onChange;
      const yearOptions= this.getYearOptions(this.props.year);
      const difficultyOptions= this.getDifficultyOptions(this.props.difficultly)
      const questionNumberOptions= this.getAmountOptions(this.props.amount)
      return (
      <div>
        <h2>Settings</h2>
        <div className="Game_settings">
        <SingleSelect title={"Year"} options={yearOptions} task={this.props.setYear}/>
        <SingleSelect title={"Dificutly"} options={difficultyOptions} task={this.props.setDifficultly}/>
        <SingleSelect title={"Questions"} options={questionNumberOptions} task={this.props.setAmount}/>
        </div>
        <br/>
        <button className="Game_conferm" onClick={onChange}>Go</button>
      </div>
    );
  }
}

export default GameSettings;