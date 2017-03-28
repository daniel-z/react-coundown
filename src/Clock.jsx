import React, { Component } from 'react';

class Clock extends Component {

  constructor (props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  render () {
    return (
      <div>
        <div className="clock-days">0 days</div>
        <div className="clock-hours">0 hours</div>
        <div className="clock-minutes">0 minutes</div>
        <div className="clock-seconds"> seconds</div>
      </div>
    )
  }
}

export default Clock;
