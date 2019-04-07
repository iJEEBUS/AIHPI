import React, { Component } from 'react';

class SingleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
          blank:"aa",
          short:"bb"
        };
    }
    blankUpdate = (e) =>{
      this.setState({
        blank:e.target.value
      })
     
    }
    shortUpdate = (e) =>{
      this.setState({
        short:e.target.value
      })
     
    }
    render() {
        return (
          <div className="AnswerBox">
          {this.props.question}
          {this.props.type == "blank"?<div><input onChange={(e) => this.blankUpdate(e)} value={this.state.blank}></input><button onClick={()=>this.props.answer(this.state.blank)}>submit</button></div>:null}
          {this.props.type == "tf"?<div><button onClick={()=>this.props.answer("true")}>true</button><button onClick={()=>this.props.answer("false")}>false</button></div>:null}
          {this.props.type == "multi"?
            <div>
                <button onClick={()=>this.props.answer(this.props.wordbank[0])}>{this.props.wordbank[0]}</button>
                <button onClick={()=>this.props.answer(this.props.wordbank[1])}>{this.props.wordbank[1]}</button><br />
                <button onClick={()=>this.props.answer(this.props.wordbank[2])}>{this.props.wordbank[2]}</button>
                <button onClick={()=>this.props.answer(this.props.wordbank[3])}>{this.props.wordbank[3]}</button>
            </div>
            :null}
          {this.props.type == "short"?<div><textarea rows="4" cols="50" onChange={(e) => this.shortUpdate(e)} value={this.state.short}></textarea><button onClick={()=>this.props.answer(this.state.short)}>submit</button></div>:null}
          </div>
        );
      }
}
    
export default SingleSelect;