import React , {Component} from 'react';
import './TimerSetter.css';

export default class TimerSetter extends Component{

    render(){
        return(
            <div>
                <h2>Session Time</h2>
                <div>
                    <button onClick = {this.props.onDrecrease}>-</button>
                    <span>{this.props.taskTime}</span>
                    <button onClick = {this.props.onIncrease}>+</button>
                </div>
            </div>
        )
    }

}


