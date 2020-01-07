import React, { Component } from 'react';
import './Time.css';

const clockTime = secTime => {
    let minute = Math.floor((secTime / 60));
    if (minute < 10) {
        minute = '0' + minute;
    }

    let sec = secTime - (minute * 60);
    if (sec < 10) {
        sec = '0' + sec;
    }

    return `${minute} : ${sec}`;

}

export default class Time extends Component {
    render() {
        return (
            <div className="time">
                <div className="timediv">
                    <label className="labeltime">Task</label>
                </div>
                <div className="timediv">
                    <label className="labeltime">{clockTime(this.props.secTime)}</label>
                </div>
            </div>
        )
    }

}