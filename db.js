const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createPool({
    host: process.env.DbHost,
    user: process.env.DbUser,
    password: process.env.DbPassword,
    database: process.env.DbName,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

db.getConnection((err) => {
    if(err)
        console.error('Error connecting to MySQL Database', err);
    else
        console.log('Successfully connected to MySQL Database');
});

db.releaseConnection((err) => {
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('connection closed');
})

module.exports = {db};