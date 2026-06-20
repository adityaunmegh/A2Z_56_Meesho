var mysql=require('mysql2');
<<<<<<< HEAD
var util=require('util');

var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ROOT',
    database:'meesho'
});

var exe=util.promisify(conn.query).bind(conn);

module.exports=exe;
=======

var connection=mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'meesho'
}); 

function exe(sql, values) {
    return connection.promise().query(sql, values).then(function(result) {
        return result[0];
    });
}

module.exports=exe;
>>>>>>> 6b8deb8592b820908f5f32245d02a88565deaee3
