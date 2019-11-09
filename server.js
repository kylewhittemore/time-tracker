const express = require('express')
const app = express()
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Str@ton523",
    database: "timer_db"
})

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: ", err.stack);
        return;
    }
    console.log("connected as id ", connection.threadId);
})

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Server is running on port: ", PORT)
});

const queryString = `insert into activities (activity_name) values ("hamming it up") `

connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log(result)
})