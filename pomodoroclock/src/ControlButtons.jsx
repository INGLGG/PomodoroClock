import React from 'react';

<<<<<<< HEAD
export default function ControlButtons({
    canBePause,
    onStop,
    onStartorPause
}) {
    return (
        <div className="controlButtons" >
            <button className="btn btn-log btn-success" onClick={onStartorPause}>
                {!canBePause ? 'Start' : 'Pause'}
            </button>
            <button className="btn btn-log btn-success" onClick={onStop}> Stop </button>
        </div>
        );
}
=======
export default function ControlButtons({canBePause,onStop,onStartorPause}){
        return (
            <div className = "controlButtons" >
                <button id = "PlayPause" onClick={onStartorPause}>
                    {!canBePause ? 'Start' : 'Pause' }
                </button>
                <button 
                id ="Stop" 
                onClick={onStop}
                > Stop </button>
            </div>  
            
        )
}
>>>>>>> dev
