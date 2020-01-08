import React, { Component } from "react";
import "./TimerSetter.css";

export default class TimeSetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.hanlderSubmit = this.hanlderSubmit.bind(this);
  }

  handlerChange(e) {
    this.setState({ value: e.target.value });
  }

  hanlderSubmit(e) {
    this.props.onChangeName(this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div id="settercontainer">
        <form className="submitform" onSubmit={this.hanlderSubmit}>
          <div className="input-group mb-3">
            <input
              disabled={this.props.isRunning}
              type="text"
              className="form-control"
              placeholder="Task Name"
              pattern="^.{1,13}$"
              title="Max 13 characters"
              value={this.state.value}
              onChange={this.handlerChange}
            />
            <div className="input-group-append">
              <button
                disabled={this.props.isRunning}
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Set Name
              </button>
            </div>
          </div>
        </form>
        <div id="setterlabel">
          <label>Set Time</label>
        </div>
        <div>
          <button
            className="setterbuttons"
            disabled={this.props.isRunning}
            onClick={this.props.onDecrease}
          >
            -
          </button>
          <span className="settertime">{this.props.taskTime}</span>
          <button
            className="setterbuttons"
            disabled={this.props.isRunning}
            onClick={this.props.onIncrease}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
