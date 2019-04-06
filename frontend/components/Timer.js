import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

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
        <FontAwesomeIcon icon={faClock} size={"1x"} />
        {seconds}
      </div>
    );
  }
}

export default Timer;