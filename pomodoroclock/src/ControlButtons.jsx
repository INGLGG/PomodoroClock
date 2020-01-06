import React , {Component} from 'react';

export default class ControlButtons extends Component{
    render (){
        return (
            <div className = "controlButtons" >
                <button id = "PlayPause" onClick={this.props.onStartorPause}>
                    {!this.props.canBePause ? 'Start' : 'Pause' }
                </button>
                <button 
                id ="Stop" 
                onClick={this.props.onStop}
                > Stop </button>
            </div>  
            
        )
    }
}