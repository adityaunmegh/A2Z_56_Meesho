var mysql = require('mysql2');
<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8

var connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'ROOT',
    database: process.env.DB_NAME || 'meesho'
});

function exe(sql, values) {
    return connection.promise().query(sql, values).then(function (result) {
        return result[0];
    });
}

<<<<<<< HEAD
module.exports = exe;
=======
module.exports = exe;
>>>>>>> d3ec854b1a2c1ebcbbc0f722e2b5acf702c62fc8
