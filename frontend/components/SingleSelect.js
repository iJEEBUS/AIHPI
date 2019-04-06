import React, { Component } from 'react';
import './SingleSelect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SingleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: this.props.options,
        };
    }

handleOptionSelect(e, content, task){
    const key = e;
    const newOptions = this.state.options.filter(function(value) {
    if (value.key === key) {
        value.selected =true;
        return value;
    } else {
        value.selected =false;
        return value;
    }
    });
    this.setState({
    options: newOptions
    })
    task(content)
}

  render() {
    return (
      <div className="SingleSelectBox">
      <b>{this.props.title}</b><br/>
      {this.state.options.map(i => (
            <table className="inline" onClick={()=>this.handleOptionSelect(i.key,i.content,this.props.task) }>
              {i.icon ==null?null:<tr><td><FontAwesomeIcon className={i.selected? "complete":""} icon={i.icon} size={"2x"} /></td></tr> }
              <tr><td className={i.selected? "complete":""}>{i.content}</td></tr> 
            </table>
            
    ))}
      </div>
    );
  }
}

export default SingleSelect;