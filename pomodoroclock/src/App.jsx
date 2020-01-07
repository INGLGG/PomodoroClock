import React, { Component } from 'react';
import "bootsstrap/dist/css/bootsstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css';
import Time from './Time';
import TimerSetter from './TimerSetter';
import ControlButtons from './ControlButtons';

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
      taskName: defaultTaskName
    }

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
      taskName: defaultTaskName,
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div className="App">
              <h1>Pomodoro Clock</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <TimeSetter
              isRunning={this.state.isOn}
              taskTime={this.state.taskTime}
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4 timeapp">
            <Time secTime={this.state.secTime} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <ControlButtons
              onStop={this.onStop}
              onStartorPause={this.onStartorPause}
              canBePause={this.state.canBePause}
              isOn={this.state.isOn}
            />
          </div>
        </div>
      </div>
    )

  }
}