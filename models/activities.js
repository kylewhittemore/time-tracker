const db_connection = require('../config/db_connection')

const activities = {
    create: function(activity, cb) {
        let queryString = `insert into activities (activity_name) values ("${activity}");`
        db_connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },

    getAll: function(cb) {
        let queryString = `select * from activities;`
        db_connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = activities;