const express = require('express');
const activitiesRouter = require("./routes/activitiesController");
const timerEventsRouter = require('./routes/timerEventsController');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(activitiesRouter);
app.use(timerEventsRouter);

app.listen(PORT, function() {
    console.log("Server is running on port: ", PORT);
});

