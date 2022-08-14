var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database.ch20jynn3pde.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'T0410165g',
    database: 'Manga_Website'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;