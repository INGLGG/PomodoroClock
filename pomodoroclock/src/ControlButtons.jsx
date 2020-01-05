import React , {Component} from 'react';

export default class ControlButtons extends Component{
    render (){
        return (
            <div className = "controlButtons">
                <button id = "PlayPause" onClick={this.props.onStartorPause}>
                    Start
                </button>
                <button id ="Stop" onClick={this.props.onStop}>Stop</button>
            </div>  
            
        )
    }
}