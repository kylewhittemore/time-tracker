const mysql = require('mysql');

const db_connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Str@ton523",
    database: "timer_db"
})

db_connection.connect(function(err) {
    if (err) {
        console.error("error connecting: ", err.stack);
        return;
    }
    console.log("connected as id ", db_connection.threadId);
})

module.exports = db_connection;
