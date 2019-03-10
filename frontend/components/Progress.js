import React, { Component } from 'react';
import './Progress.css'

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showQuestion: false,
          questions: this.props.questions,
        };
    }

  render() {
    return (
      <div className="ProgressBox">
      {this.state.questions.map(i => (
            <div className={i.answered? " complete inline":" inline"}>
            </div>
            
    ))}
      </div>
    );
  }
}

export default Progress;

