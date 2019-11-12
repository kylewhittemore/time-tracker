import React, { useState, useEffect } from 'react';
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
  const [formData, setFormData] = useState({ activity: "family time", notes: "" });
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const result = await axios.get('/activities/all');
      // console.log(result)
      setActivities(result.data)
    }
    getActivities();
  }, [])

  const handleTimerEvent = () => {
    let now = new moment()._d
    if (timerActive) {
      setTimerActive(false)
      postTimerEvent(now)

    } else {
      setStartTime(now)
      setTimerActive(true)
    }
  }

  async function postTimerEvent(now) {
    const timerEvent = {
      activity: formData.activity,
      startTime: startTime,
      endTime: now,
      notes: formData.notes
    }
    console.log("timerEvent: ", timerEvent)
    let result = await axios.post('/events/create', timerEvent)
    console.log(result)
  }


  console.log("formdata: ", formData)
  return (
    <div className="App">
      <Container fluid={true}>
        <Row id="content-container">
          <Col md={{ span: 6, offset: 3 }}>
            {timerActive ?
              <TimerDisplay
                handleTimerEvent={handleTimerEvent}
                startTime={startTime}
                activity={formData.activity}
              />
              :
              <TimerForm
                handleTimerEvent={handleTimerEvent}
                formData={formData}
                setFormData={setFormData}
                activities={activities}
              />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
