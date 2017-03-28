import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css'
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: null
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
        <Clock deadline={this.state.deadline}/>
        <Form inline action="#">
          <FormControl
            className="deadline-input"
            placeholder="new date"
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}> Submit </Button>
        </Form>
      </div>
    )
  }
}

export default App;
