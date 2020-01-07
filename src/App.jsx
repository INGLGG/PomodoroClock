import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ControlButtons from "./ControlButtons";
import TimeSetter from "./TimerSetter";
import Time from "./Time";
import "./App.css";

const defaultTime = 10;
const defaultTaskName = "";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTime: Number.parseInt(defaultTime, 10),
      secTime: Number.parseInt(defaultTime, 10) * 60,
      canBePause: false,
      isOn: false,
      clock: null,
      taskName: null
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.clock = this.clock.bind(this);
    this.onStartorPause = this.onStartorPause.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onStartorPause() {
    if (!this.state.isOn && !this.state.canBePause) {
      this.setState({
        isOn: true,
        clock: setInterval(this.clock, 1000)
      });
      console.log(this.state);
    } else if (this.state.isOn && !this.state.canBePause) {
      this.setState({
        isOn: false,
        canBePause: true,
        clock: null
      });
      console.log(this.state);
      this.state.clock && clearInterval(this.state.clock);
    } else {
      this.setState({
        isOn: true,
        canBePause: false,
        clock: setInterval(this.clock, 1000)
      });
      console.log(this.state);
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
    });
    this.state.clock && clearInterval(this.state.clock);
  }

  onIncrease() {
    if (this.state.taskTime < 25) {
      this.setState({
        taskTime: this.state.taskTime + 1,
        secTime: (this.state.taskTime + 1) * 60
      });
    }
  }

  onDecrease() {
    if (this.state.taskTime > 10) {
      this.setState({
        taskTime: this.state.taskTime - 1,
        secTime: (this.state.taskTime - 1) * 60
      });
    }
  }

  clock() {
    let seconds = this.state.secTime;
    if (this.state.isOn) {
      seconds--;
      this.setState({
        secTime: seconds
      });
    }
    if (seconds === 0) {
      alert("Take a 5 Minute Break");
      this.onStop();
    }
  }

  onChangeName(NewtaskName) {
    this.setState({
      taskName: NewtaskName
    });
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
              onChangeName={this.onChangeName}
              isRunning={this.state.isOn}
              taskTime={this.state.taskTime}
              taskName={this.state.taskName}
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4 timeapp">
            <Time secTime={this.state.secTime} taskName={this.state.taskName} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <ControlButtons
              isOn={this.state.isOn}
              onStop={this.onStop}
              onStartorPause={this.onStartorPause}
              canBePause={this.state.canBePause}
              taskName={this.state.taskName}
            />
          </div>
        </div>
      </div>
    );
  }
}
