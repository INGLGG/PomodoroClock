import React from "react";
import "./ControlButtons.css";

export default function ControlButtons({
  canBePause,
  onStop,
  onStartorPause,
  isOn
}) {
  return (
    <div className="controlButtons">
      <button
        id="startbutton"
        className="btn btn-lg btn-success"
        onClick={onStartorPause}
      >
        {!canBePause && isOn
          ? "Pause"
          : !isOn && canBePause
          ? "Resume"
          : "Start"}
      </button>
      {/* I use the same green button to simulate a tomato XD*/}
      <button className="btn btn-lg btn-success" onClick={onStop}>
        Stop
      </button>
    </div>
  );
}
