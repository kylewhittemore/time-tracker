import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TimerForm from './TimerForm';
import TimerDisplay from './TimerDisplay';
import moment from 'moment';

function Timer() {

  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState();
  const [formData, setFormData] = useState({ activity: "family time", notes: "" });
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const result = await axios.get('/activities/all');
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
    axios.post('/events/create', timerEvent)
  }

  return (
    <div>
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
    </div>
  );
}

export default Timer;
