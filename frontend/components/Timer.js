import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seconds: this.props.seconds
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ seconds: this.state.seconds>0?this.state.seconds-1:0 }), 1000);
      }
  render() {
      const seconds = this.state.seconds;
    return (
      <div>
        {"Time Remaining: "}<br/>
        {seconds}
      </div>
    );
  }
}

export default Timer;