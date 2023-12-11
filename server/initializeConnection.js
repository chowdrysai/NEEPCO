const mysql = require('mysql2');

// user and password is device specific
const establishConnection = () => {

    const db = mysql.createConnection({
        host:"localhost",
    database:'emp_database',
    user:'root',
    password:'sonu',
        multipleStatements: true
    });

    db.connect((err) => {
        if (err) {
            console.log("[ERROR]: Failed to connect to MySQL");
            console.log(err);
        }
        else {
            console.log("[MESSAGE]: Connected to MySQL...");
        }
    });

    return [db];

}

module.exports = establishConnection;
