import React from 'react';

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
