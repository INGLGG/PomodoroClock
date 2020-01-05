import React, { Component } from 'react';
import './App.css';
import Time from './Time';
import TimerSetter from './TimerSetter';
import ControlButtons from './ControlButtons';


export default class App extends Component {

  //Se necesita un constructor para poder inicializar los estados
  constructor(props) {
    super(props);

    this.state = {
      timeSeconds: 0,
      timeMinutes: 0,
      isOn: false,
      defaultTime: 10,
    }

    this.onStartorPause = this.onStartorPause.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDrecrease = this.onDrecrease.bind(this);
  }

  onStartorPause() {

  }

  onStop() {

  }

  onIncrease() {

  }

  onDrecrease() {

  }




  render() {
    return (
      <div>
        <div>
          <h1>Pomodoro Clock</h1>
        </div>


        <TimerSetter />
        <Time />
        <ControlButtons
          onStop={this.onStop}
          onStartorPause={this.onStartorPause}
          isOn={this.isOn}
        />
      </div>
    )

  }
}