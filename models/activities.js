const db_connection = require('../config/db_connection')

const activities = {
    create: function(name, cb) {
        db_connection.query(`insert into activities (activity_name) values ("${name}");`, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = activities;