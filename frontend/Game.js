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
      questionsNumber: 1,
      data:[]
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
      { key:0, data: this.patientData1(), question:"where?", correct:"true", answered: false, answer:"", type:"tf", wordbank:["none"], time: 10 },
      { key:1, data: this.patientData2(), question:"when?", correct:"aa", answered: false, answer:"", type:"blank", wordbank:[], time: 14 },
      { key:2, data: this.patientData3(), question:"why?", correct:"bb", answered: false, answer:"", type:"short", wordbank:[], time: 11 },
      { key:3, data: this.patientData4(), question:"who?", correct:"two", answered: false, answer:"", type:"multi", wordbank:["one","two","three", "four"], time: 20  },
      { key:4, data: this.patientData5(), question:"wo?", correct:"false", answered: false, answer:"", type:"tf", wordbank:[], time: 20  }
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
  openModalHandler = (data) => {
    this.setState({
        isShowing: true,
        data: data
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
            close={this.closeModalHandler}
            data={this.state.data}
            rounds = {this.state.questionsNumber}
          >
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