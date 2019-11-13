import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

export default function TimerDisplay(props) {

    const [timer, setTimer] = useState("00:00:00");

    useEffect(() => {
        updateTimerDisplay();
        const interval = setInterval(() => {
            updateTimerDisplay();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function updateTimerDisplay() {
        const now = new moment();
        const diff = moment.duration(now.diff(props.startTime))
        const sec = makeTwoDigit(Math.floor(diff.seconds()))
        const min = makeTwoDigit(Math.floor(diff.minutes()))
        const hrs = makeTwoDigit(Math.floor(diff.hours()))

        setTimer(`${hrs}:${min}:${sec}`)
    }

    function makeTwoDigit(num) {
        return (num < 10) ? `0${num}` : num.toString();
    }

    return (

        <div>
            <h2>{props.activity}</h2>
            <h1 id="timer">{timer}</h1>
            <Button onClick={props.handleTimerEvent}>Stop</Button>
        </div>

    )

}