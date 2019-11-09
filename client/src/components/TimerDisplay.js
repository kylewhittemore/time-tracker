import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function TimerDisplay(props) {

    return (

        <div>
            <h2>Activity being timed</h2>
            <h1 id="timer">{props.activeTimer}</h1>
            <Button onClick={props.handleTimerEvent}>Stop</Button>
        </div>

    )

}