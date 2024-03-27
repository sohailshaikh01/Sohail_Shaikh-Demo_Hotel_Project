
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

var db; 

db = mysql.createPool({
    host: process.env.DbHost,
    user: process.env.DbUser,
    password: process.env.DbPassword,
    database: process.env.DbName,
    waitForConnections: true,
    queueLimit: 0,
    connectionLimit: 5,
    // maxIdle: 5,
    // idleTimeout: 60000,
    // enableKeepAlive: true,
    // keepAliveInitialDelay: 0
});

module.exports = db;
