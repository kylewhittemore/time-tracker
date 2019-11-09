import React from 'react';
import Button from 'react-bootstrap/Button';
import Moment from 'moment';

export default function TimerDisplay() {

    return (

        <div>
            <h2>C# and .NET</h2>
            <h1 id="timer">00:01:01</h1>
            <Button>Stop</Button>
        </div>

    )

}