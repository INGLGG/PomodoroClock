import React, { Component } from 'react';
import './App.css';
import Time from './Time';
import TimerSetter from './TimerSetter';
import ControlButtons from './ControlButtons';
import ReactModal from 'react-modal';

const defaultTime = 1;
const defaultTaskName = '';

export default class App extends Component {

  //Se necesita un constructor para poder inicializar los estados
  constructor(props) {
    super(props);

    this.state = {
      taskTime: Number.parseInt(defaultTime, 10),
      secTime: Number.parseInt(defaultTime, 10) * 60,
      canBePause: false,
      isOn: false,
      clock: null,
      taskName: ''
    }

    this.intervalHandler = null;
    this.clock = this.clock.bind(this);
    this.onStartorPause = this.onStartorPause.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDrecrease = this.onDrecrease.bind(this);
  }

  onStartorPause() {
    if (!this.state.isOn) {
      this.setState({
        isOn: true,
        canBePause : true,
        clock: setInterval(this.clock,1000)
      })
    } else if(this.state.isOn) {
      this.setState({
        isOn: false,
        canBePause: false,
        clock: null
      })
      this.state.clock && clearInterval(this.state.clock);
    }
  }

  onStop() {
    this.setState({
      taskTime: Number.parseInt(defaultTime, 10),
      secTime: Number.parseInt(defaultTime, 10) * 60,
      canBePause: false,
      isOn: false,
      taskName: '',
      clock: null
    })
    this.state.clock && clearInterval(this.state.clock);
  }

  onIncrease() {
    if (this.state.taskTime < 25) {
      this.setState({
        taskTime: this.state.taskTime + 1,
        secTime: (this.state.taskTime + 1) * 60
      })
    }
  }

  onDrecrease() {
    if (this.state.taskTime > 1) {
      this.setState({
        taskTime: this.state.taskTime - 1,
        secTime: (this.state.taskTime - 1) * 60
      })
    }

  }

  clock() {
    let seconds = this.state.secTime
    if (this.state.isOn) {
      seconds--
      this.setState({
        secTime: seconds
      })
    }
    if (seconds === 0) {
      this.onStop();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Pomodoro Clock</h1>
        </div>


        <TimerSetter
          taskTime={this.state.taskTime}
          onIncrease={this.onIncrease}
          onDrecrease={this.onDrecrease}
        />
        <Time
          secTime={this.state.secTime}
        />
        <ControlButtons
          onStop={this.onStop}
          onStartorPause={this.onStartorPause}
          isOn={this.state.isOn}
          canBePause={this.state.canBePause}
        />
      </div>
    )

  }
}