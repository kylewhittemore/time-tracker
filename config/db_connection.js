const mysql = require('mysql');

const db_connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Str@ton523",
    database: "timer_db"
})

module.exports = db_connection;
