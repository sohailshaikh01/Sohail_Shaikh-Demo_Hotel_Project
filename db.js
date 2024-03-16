const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DbHost,
    user: process.env.DbUser,
    password: process.env.DbPassword,
    database: process.env.DbName
});

db.connect((err) => {
    if(err)
        console.error('Error connecting to MySQL Database', err);
    else
        console.log('Successfully connected to MySQL Database');
});

module.exports = {db};