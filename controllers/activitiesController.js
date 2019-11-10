const activities = require('../models/activities')
const activitiesRouter = require('express').Router();

activitiesRouter.get('/activities', (req, res) => {
    res.json("hi there")
});

activitiesRouter.post('/activities', (req, res) => {
    activities.create(req.body.activity, result => {
        console.log("activity posted: ", result)
        res.json(result)
    })
})


module.exports = activitiesRouter;