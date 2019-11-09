import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TimerForm from './components/TimerForm';
import TimerDisplay from './components/TimerDisplay';
import moment from 'moment'

function App() {

  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [activeTimer, setActivtimer] = useState();

  const alertTime = (time) => {
    let timeMessage;

    if (timerActive) {
      timeMessage = "End time: " + time;
    }
    else {
      timeMessage = "Start time: " + time;
    }
    alert(timeMessage)
  }

  const handleTimerEvent = () => {
    let now = new moment()
    let duration;

    if (timerActive) {
      duration = moment.duration(now.diff(startTime))
      setEndTime(now)
      setTimerActive(false)
    } else {
      setStartTime(now)
      setTimerActive(true)
    }
    if (duration) {
      duration = duration.asSeconds();
      alertTime(duration);
      
    }

  }

  return (
    <div className="App">
      <Container fluid={true}>
        <Row id="content-container">
          <Col md={{ span: 6, offset: 3 }}>
            {timerActive ?
              <TimerDisplay
                handleTimerEvent={handleTimerEvent}
                activeTimer={activeTimer}
              />
              :
              <TimerForm
                handleTimerEvent={handleTimerEvent}
              />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
