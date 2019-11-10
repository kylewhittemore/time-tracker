const express = require('express')
const app = express()
const db_connection = require("./config/db_connection")
const PORT = process.env.PORT || 8080;
const activitiesRouter = require("./controllers/activitiesController")
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(activitiesRouter);

app.listen(PORT, function() {
    console.log("Server is running on port: ", PORT)
});

