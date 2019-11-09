const express = require('express')
const app = express()
const db_connection = require("./config/db_connection")
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

db_connection.connect(function(err) {
    if (err) {
        console.error("error connecting: ", err.stack);
        return;
    }
    console.log("connected as id ", db_connection.threadId);
})

app.listen(PORT, function() {
    console.log("Server is running on port: ", PORT)
});

