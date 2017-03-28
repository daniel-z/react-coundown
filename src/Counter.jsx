import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: props.start
    };
  }

  resetStatus () {
    
  }

  decrementCounterToZero () {
    if (this.state.counter <= 0) {
      if (this.props.loop === true) {
        this.resetStatus();
      }
      return;
    }
    this.setState({counter: (this.state.counter - 1) });
  }

  componentDidMount () {
    if (this.props.autostart) {
      setInterval(() => this.decrementCounterToZero(), this.props.milisecs);
    }
  }

  render () {
    return (
      <div className="counter"> { this.state.counter } { this.props.label }</div>
    )
  }
}

export default Counter;
