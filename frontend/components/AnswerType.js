import React, { Component } from 'react';

class SingleSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="AnswerBox">
          {this.props.question}
          {this.props.type == "blank"?<input></input>:null}
          {this.props.type == "tf"?<div><button>true</button><button>false</button></div>:null}
          {this.props.type == "multi"?
            <div>
                <button>A</button><button>B</button><br />
                <button>C</button><button>D</button>
            </div>
            :null}
          {this.props.type == "short"?<div><textarea rows="4" cols="50"></textarea></div>:null}
          </div>
        );
      }
}
    
export default SingleSelect;