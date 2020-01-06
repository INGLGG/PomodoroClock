import React,{Component} from 'react';

const clockTime = (secTime) => {
    let minute = Math.floor((secTime / 60));
    if (minute < 10 ) {
        minute = '0' +  minute;
    }

    let sec = secTime - (minute*60);
    if(sec < 10){
        sec = '0' + sec;
    }

    return `${minute} : ${sec}`;
    
}

export default class Time extends Component{

    render(){
        return(
        <div>
            <div>
                <h2>Task</h2>
                <span>{clockTime(this.props.secTime)}</span>
            </div>
        </div>
        )
    }

}