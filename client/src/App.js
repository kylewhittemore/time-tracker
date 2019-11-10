import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TimerForm from './components/TimerForm';
import TimerDisplay from './components/TimerDisplay';
import moment from 'moment';

function App() {

  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState();

  const handleTimerEvent = () => {
    let now = new moment()
    if (timerActive) {
      setTimerActive(false)
      postTimerEvent(now._d)
    } else {
      setStartTime(now._d)
      setTimerActive(true)
    }
  }

  async function postTimerEvent(now) {
    const timerEvent = {
      activity: "web development",
      startTime: startTime,
      endTime: now
    }
    let result = await axios.post('/events/create', timerEvent)
    console.log(result)
  }



  return (
    <div className="App">
      <Container fluid={true}>
        <Row id="content-container">
          <Col md={{ span: 6, offset: 3 }}>
            {timerActive ?
              <TimerDisplay
                handleTimerEvent={handleTimerEvent}
                startTime={startTime}                
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
