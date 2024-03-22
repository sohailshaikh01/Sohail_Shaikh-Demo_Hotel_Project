
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

var dbConnection = false;

if(dbConnection === false)
{
const db = mysql.createPool({
    host: process.env.DbHost,
    user: process.env.DbUser,
    password: process.env.DbPassword,
    database: process.env.DbName,
    waitForConnections: true,
    queueLimit: 0,
    acquireTimeout: 10000
});

// var connection;

db.getConnection((err, conn) => {
    if(err)
    {
        console.error('Error connecting to MySQL Database', err);
        return;
    }
            console.log('Successfully connected to MySQL Database');

        dbConnection = true;
        conn.release();
    
    // else
    // {
    //     console.log('Successfully connected to MySQL Database');
    // }
});
}

// db.end((err)=>{
//     if(err)
//         console.error(err);
//     else
//         console.log("Connection released successfully");
// });

module.exports = db;
