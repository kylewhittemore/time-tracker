const timerEventsRouter = require('express').Router();
const db_connection = require('../config/db_connection');

timerEventsRouter.get('/events/all', (req, res) => {
    let queryString = 'select * from timer_events;'
    db_connection.query(queryString, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

timerEventsRouter.post('/events/create', (req, res) => {
    let activity = req.body.activity;
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;
    let totalTime = req.body.totalTime;

    let queryString = `insert into timer_events (activity, timer_start, timer_end, total_event_minutes) values ("${activity}", "${startTime}", "${endTime}", "${totalTime}");`
    db_connection.query(queryString, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

module.exports = timerEventsRouter;