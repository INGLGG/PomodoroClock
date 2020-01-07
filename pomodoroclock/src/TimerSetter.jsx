import React from 'react';
import './TimerSetter.css';

export default function TimerSetter({
    onIncrease,
    onDrecrease,
    taskTime,
    isRunning
}) {

    return (
        <div>
            <div>
                <label>Task Time</label>
            </div>
            <div>
                <button disabled={isRunning} onClick={onDrecrease}>-</button>
                <span>{taskTime}</span>
                <button disabled={isRunning} onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}




