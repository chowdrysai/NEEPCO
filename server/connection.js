const mysql = require('mysql2');
const os = require('os');
const connectionLimit = os.cpus().length;

const db = mysql.createPool({
    host:"localhost",
    database:'emp_database',
    user:'root',
    password:'sonu',
    // host: 'localhost',
    // user: 'root',
    // password: 'sonu', 
    // database: 'neepco_procurement_management',
    waitForConnections: true,
    connectionLimit: connectionLimit,
    queueLimit: 0
});

// user and password is device specific

module.exports = {db};
