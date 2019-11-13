import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TimerForm from './TimerForm';
import TimerDisplay from './TimerDisplay';
import NewActivityModal from './NewActivityModal';
import moment from 'moment';

function Timer() {

  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState();
  const [formData, setFormData] = useState({});
  const [activities, setActivities] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    async function checkTimer() {
      const timer = JSON.parse(localStorage.getItem("timer"))
      if (timer) {
        setStartTime(timer.startTime)
        setFormData({
          activity: timer.activity,
          startTime: timer.startTime,
          notes: timer.notes
        })
        setTimerActive(true)
      }
      else {
        getActivities();
      }
    }
    async function getActivities() {
      const result = await axios.get('/activities/all');
      setActivities(result.data)
      setFormData({ activity: result.data[0].activity_name })
    }
    checkTimer()
  }, [timerActive])

  const handleTimerEvent = () => {
    let now = new moment()._d
    if (timerActive) {
      localStorage.clear("timer")
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
      localStorage.setItem("timer", JSON.stringify(timer))
    }
  }

  async function postTimerEvent(now) {
    console.log("post Timer formData: ", formData)
    const timerEvent = {
      activity: formData.activity,
      startTime: formData.startTime,
      endTime: now,
      notes: formData.notes
    }
    setFormData({ activity: "coding", notes: "" })
    let result = await axios.post('/events/create', timerEvent)
    console.log(result)
    handleShow()
  }

  return (
    <div>
      <NewActivityModal 
        show={show}
        handleClose={handleClose}
        handleShow={handleShow} />
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
