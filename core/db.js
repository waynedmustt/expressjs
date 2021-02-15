'user strict';

const mysql = require('mysql'),
    dotenv = require('dotenv');
    dotenv.config();

const connection = mysql.createConnection({
        host     : process.env.HOST || 'localhost',
        user     : process.env.DATABASE_USER || 'root',
        password : process.env.PASSWORD || '',
        database : process.env.DATABASE || 'database'
      });

if (process.env.NODE_ENV !== 'test') {
    connection.connect((err) => {
        if (err) throw err;
    });
}

module.exports = connection;