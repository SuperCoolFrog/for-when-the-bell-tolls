import React, { Component } from 'react';
import { totalBellTolls } from './utils/bell-counter';
import { validate24HourTime } from './validators/validate-time';
import TimeInput from './components/time-input/TimeInput';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '',
      endTime: '',
      numberOfBells: 0,
    }; 
  }

  updateTime = (key) => (e) => this.setState({ [key]: e.target.value });

  render() {
    const {
      startTime,
      endTime
    } = this.state;

    const startTimeErrorMessage = !startTime || validate24HourTime(startTime);
    const endTimeErrorMessage = !endTime || validate24HourTime(endTime);
    const isValid = !(startTimeErrorMessage || endTimeErrorMessage);

    return (
      <div className='app'>
        <div className='number-of-bell-tolls'>
          { isValid && `Number of bell Tolls: ${totalBellTolls(startTime, endTime)}`}
        </div>
        <TimeInput label='Start Time' value={startTime}
          onChange={this.updateTime('startTime')} errorMessage={startTimeErrorMessage} />
        <TimeInput label='End Time' value={endTime}
          onChange={this.updateTime('endTime')} errorMessage={endTimeErrorMessage} />
      </div>
    );
  }
}

export default App;
