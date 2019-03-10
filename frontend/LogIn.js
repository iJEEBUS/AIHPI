import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {
  render() {
    return (
      <div className="LogIn_container">
        <h2>Log In</h2>
        <p>User Name</p>
        <input className="LogIn_text"></input>
        <p>Password</p>
        <input type="password" className="LogIn_text"></input>
        <br/>
        <button className="LogIn_conferm">Go</button>
      </div>
    );
  }
}

export default LogIn;