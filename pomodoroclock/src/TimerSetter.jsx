import React , {Component} from 'react';
import './TimerSetter.css';

export default class TimerSetter extends Component{

    render(){
        return(
            <div>
                <h2>Session Time</h2>
                <div>
                    <button>-</button>
                    <span>Duracion</span>
                    <button>+</button>
                </div>
            </div>
        )
    }

}


