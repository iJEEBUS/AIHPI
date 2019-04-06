import React, { Component } from 'react';
import SingleSelect from './SingleSelect';
import './GameSettings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeh, faGrinBeam, faGrinStars, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

class GameSettings extends Component {
  getYearOptions = (year) =>{
    const yearOptions = [{key:1,content:"1",icon:null,selected:false},{key:2,content:"2",icon:null,selected:false},{key:3,content:"3",icon:null,selected:false}]
    const setYearOptions = yearOptions.filter(function(option){
      if(option.content == year){
        option.selected =true;
      }
      return option;
    });
    return setYearOptions;
  }
  getDifficultyOptions = (difficulty) =>{
    const difficultyOptions = [{key:1,content:"easy",icon:faMeh,selected:false},{key:2,content:"medium",icon:faGrinBeam,selected:false},{key:3,content:"hard",icon:faGrinStars,selected:false}]
    const setDifficultyOptions = difficultyOptions.filter(function(option){
      if(option.content == difficulty){
        option.selected =true;
      }
      return option;
    });
    return setDifficultyOptions;
  }
  getAmountOptions = (amount) =>{
    const amountOptions = [{key:1,content:"1",icon:null,selected:false},{key:2,content:"3",icon:null,selected:false},{key:3,content:"5",icon:null,selected:false}]
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
        <FontAwesomeIcon icon={faArrowAltCircleRight} size={"3x"} onClick={onChange}/>
      </div>
    );
  }
}

export default GameSettings;