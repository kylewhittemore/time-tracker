import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TimerForm from './TimerForm';
import TimerDisplay from './TimerDisplay';
import moment from 'moment';
import timerLogic from './timerLogic'

function Timer() {

  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState();
  const [formData, setFormData] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {

    function checkTimer() {
      const timer = localStorage.getItem("timer")
      if (timer) {
        console.log("whooooooeeeee")
      }
      else {
        console.log("NO TIMER")
      }
    }

    async function getActivities() {
      const result = await axios.get('/activities/all');
      setActivities(result.data)
      setFormData({ activity: result.data[0].activity_name })
    }
    checkTimer();
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

      const timer = {
        activity: formData.activity,
        startTime: now,
        notes: formData.notes
      }
      timerLogic.initiateTimer(timer)
    }
  }

  async function postTimerEvent(now) {
    const timerEvent = {
      activity: formData.activity,
      startTime: startTime,
      endTime: now,
      notes: formData.notes
    }
    let result = await axios.post('/events/create', timerEvent)
    console.log(result)
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
