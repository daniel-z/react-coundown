import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: 'December 30, 2017'
    };
  }

  changeDeadline () {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock />
        <input placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}/>
        <button onClick={() => this.changeDeadline()}> Submit </button>
      </div>
    )
  }
}

export default App;
