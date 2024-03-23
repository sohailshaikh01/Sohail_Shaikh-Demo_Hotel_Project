
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

var db; 

if(!db)
{
        db = mysql.createPool({
        host: process.env.DbHost,
        user: process.env.DbUser,
        password: process.env.DbPassword,
        database: process.env.DbName,
        waitForConnections: true,
        queueLimit: 0
    });
}

// var connection;

// db.getConnection((err, conn) => {
//     if(err)
//     {
//         console.error('Error connecting to MySQL Database', err);
//         return;
//     }
//             console.log('Successfully connected to MySQL Database');

//         conn.destroy();
    
    // else
    // {
    //     console.log('Successfully connected to MySQL Database');
    // }
// });
// }

// db.end((err)=>{
//     if(err)
//         console.error(err);
//     else
//         console.log("Connection released successfully");
// });

module.exports = db;
