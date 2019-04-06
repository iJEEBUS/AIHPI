import React, { Component } from 'react';
import './Game.css';
import GameSettings from './components/GameSettings'
import GamePlay from './components/GamePlay'
import Completion from './components/Completion'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifeCycle: "settings",
      year: "1",
      difficultly: "easy",
      questionsNumber: 1
    };
  }
  handleYearSet= value =>{
    this.setState({
      year: value
    })
  }
  handleDifficultySet= value =>{
    this.setState({
      difficultly: value
    })
  }
  handleQuestionsNumberSet= value =>{
    this.setState({
      questionsNumber: value
    })
  }
  retrieveDataFromTable=()=>{
    const queriedQuestions = [
      { key:0, data: this.patientData1(), question:"where?", answered: false, answer:"", type:"tf", time: 10 },
      { key:1, data: this.patientData2(), question:"when?", answered: false, answer:"", type:"blank", time: 14 },
      { key:2, data: "data3 ", question:"why?", answered: false, answer:"", type:"short", time: 11 },
      { key:3, data: "data4", question:"who?", answered: false, answer:"", type:"multi", time: 20  },
      { key:4, data: "data5", question:"wo?", answered: false, answer:"", type:"tf", time: 20  }
    ];
    const filteredQuestions = queriedQuestions.filter(question => question.key <this.state.questionsNumber);
    return filteredQuestions;
  }
  //TODO DELETE THIS LATER!!
  patientData1=()=>{
    return {
      chiefComplaint: "Adominal pain", 
      pastMedicalHistory1:"none",
      pastSurgicalHistory1:"none",
      pastSocialHistory1:"none",
      pastMedicalHistory2:"none",
      pastSurgicalHistory2:"none",
      pastSocialHistory2:"none",
      pastMedicalHistory3:"none",
      pastSurgicalHistory3:"none",
      pastSocialHistory3:"none",
      mother:"none",
      father:"none",
      siblings:"none",
      children:"none",
      medication1:"Aderal",
      dose1:"20mg per day",
      medication2:"Moteran",
      dose2:"80mg 2 per day"
    };
  }
  patientData2=()=>{
    return {
      chiefComplaint: "Adominal pain", 
      pastMedicalHistory1:"Broken arm",
      pastSurgicalHistory1:"Arm removed",
      pastSocialHistory1:"Smokes socialy",
      pastMedicalHistory2:"none",
      pastSurgicalHistory2:"none",
      pastSocialHistory2:"Drinks socialy",
      pastMedicalHistory3:"none",
      pastSurgicalHistory3:"none",
      pastSocialHistory3:"Does drugs",
      mother:"Apendix Removed",
      father:"none",
      siblings:"none",
      children:"none",
      medication1:"none",
      dose1:"none",
      medication2:"none",
      dose2:"none"
    };
  }
  patientData3=()=>{
    return {
      chiefComplaint: "Adominal pain", 
      pastMedicalHistory1:"none",
      pastSurgicalHistory1:"none",
      pastSocialHistory1:"none",
      pastMedicalHistory2:"none",
      pastSurgicalHistory2:"none",
      pastSocialHistory2:"none",
      pastMedicalHistory3:"none",
      pastSurgicalHistory3:"none",
      pastSocialHistory3:"none",
      mother:"none",
      father:"none",
      siblings:"none",
      children:"none",
      medication1:"none",
      dose1:"none",
      medication2:"none",
      dose2:"none"
    };
  }
  patientData4=()=>{
    return {
      chiefComplaint: "Adominal pain", 
      pastMedicalHistory1:"none",
      pastSurgicalHistory1:"none",
      pastSocialHistory1:"none",
      pastMedicalHistory2:"none",
      pastSurgicalHistory2:"none",
      pastSocialHistory2:"none",
      pastMedicalHistory3:"none",
      pastSurgicalHistory3:"none",
      pastSocialHistory3:"none",
      mother:"none",
      father:"none",
      siblings:"none",
      children:"none",
      medication1:"none",
      dose1:"none",
      medication2:"none",
      dose2:"none"
    };
  }
  patientData5=()=>{
    return {
      chiefComplaint: "Adominal pain", 
      pastMedicalHistory1:"none",
      pastSurgicalHistory1:"none",
      pastSocialHistory1:"none",
      pastMedicalHistory2:"none",
      pastSurgicalHistory2:"none",
      pastSocialHistory2:"none",
      pastMedicalHistory3:"none",
      pastSurgicalHistory3:"none",
      pastSocialHistory3:"none",
      mother:"none",
      father:"none",
      siblings:"none",
      children:"none",
      medication1:"none",
      dose1:"none",
      medication2:"none",
      dose2:"none"
    };
  }
  //END DELETE
  handleStartGamePlay= event =>{
    
   const newQuestions = this.retrieveDataFromTable();
    this.setState(
      {lifeCycle: "GamePlay",
      questions: newQuestions
    }
    );
  }
  handleQuitGamePlay= event =>{
    this.setState(
      {lifeCycle: "settings"}
    );
  }
  openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

closeModalHandler = () => {
    this.setState({
      lifeCycle: "settings",
        isShowing: false
    });
}
  render() {
    if(this.state.lifeCycle == "settings"){
    return (
      <div className="Game_container">
            <GameSettings 
              onChange={this.handleStartGamePlay}
              setYear={this.handleYearSet}
              year={this.state.year}
              setDifficultly={this.handleDifficultySet}
              difficultly={this.state.difficultly}
              setAmount={this.handleQuestionsNumberSet}
              amount={this.state.questionsNumber}
              />      
      </div>
    );
    }else{
      return (
        <div className="Game_container">
        { this.state.isShowing ? 
        <div onClick={this.closeModalHandler} className="back-drop">
          <Completion
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
            You have completed the game with a score of: 83%!
            Great Job!
          </Completion></div> 
        : 
        null }
          <GamePlay
            year={this.state.year}
            difficultly={this.state.difficultly}
            quit={this.handleQuitGamePlay} 
            rouds={this.state.questionsNumber} 
            questions={this.state.questions} 
            openModal={this.openModalHandler}
          />      
        </div>
      ); 
    }
  }
}

export default Game;