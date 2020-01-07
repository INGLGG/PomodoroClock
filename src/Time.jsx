import React from "react";
import "./Time.css";

const clockTime = secTime => {
  let minute = Math.floor(secTime / 60);
  if (minute < 10) {
    minute = "0" + minute;
  }
  let sec = secTime - minute * 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  return `${minute} : ${sec}`;
};

export default function Time({ taskName, secTime }) {
  return (
    <div className="time">
      <div className="timediv">
        <label id="taskName" className="labelTime">
          {taskName}
        </label>
      </div>
      <div className="timediv">
        <label id="clockL" className="labelTime">
          {clockTime(secTime)}
        </label>
      </div>
    </div>
  );
}
