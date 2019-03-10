import React, { Component } from 'react';
import './SingleSelect.css'

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
      {this.props.title}<br/>
      {this.state.options.map(i => (
            <div className={i.selected? " complete inline":" inline"} onClick={()=>this.handleOptionSelect(i.key,i.content,this.props.task) }>
            {i.content}
            </div>
            
    ))}
      </div>
    );
  }
}

export default SingleSelect;