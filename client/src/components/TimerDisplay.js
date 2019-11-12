import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

export default function TimerDisplay(props) {

    const [timer, setTimer] = useState("00:00:00");

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval running');
            updateTimerDisplay();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function makeTwoDigit(num) {
        return (num < 10) ? `0${num}` : num.toString();
    }
    function updateTimerDisplay() {
        const now = new moment();
        let diff = moment.duration(now.diff(props.startTime))

        let sec = makeTwoDigit(Math.floor(diff.seconds()))
        let min = makeTwoDigit(Math.floor(diff.minutes()))
        let hrs = makeTwoDigit(Math.floor(diff.hours()))

        setTimer(`${hrs}:${min}:${sec}`)
    }

    return (

        <div>
            <h2>{props.activity}</h2>
            <h1 id="timer">{timer}</h1>
            <Button onClick={props.handleTimerEvent}>Stop</Button>
        </div>

    )

}