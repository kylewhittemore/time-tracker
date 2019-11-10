const activities = require('../models/activities')
const activitiesRouter = require('express').Router();
const db_connection = require('../config/db_connection')

activitiesRouter.get('/activities/all', (req, res) => {
    // activities.getAll(function(err, result) {
    //     if (err) throw err;
    //     console.log(result)
    //     res.json(result)
    // })
    let queryString = `select * from activities;`
    db_connection.query(queryString, function(err, result) {
        if (err) throw err;
        res.json(result)
    })

});

activitiesRouter.post('/activities/create', (req, res) => {
    activities.create(req.body.activity, (err, result) => {
        if (err) throw err;
        console.log("activity posted: ", result)
        res.json(result)
    })
})


module.exports = activitiesRouter;