const activitiesRouter = require('express').Router();
const db_connection = require('../config/db_connection')

activitiesRouter.get('/activities/all', (req, res) => {
    let queryString = `select * from activities;`
    db_connection.query(queryString, function (err, result) {
        if (err) throw err;
        res.json(result)
    })
});

activitiesRouter.post('/activities/create', (req, res) => {
    let queryString = `insert into activities (activity_name) values ("${req.body.activity}");`
    db_connection.query(queryString, (err, result) => {
        if (err) throw err;
        console.log("activity posted: ", result)
        res.json(result)
    })
});

module.exports = activitiesRouter;