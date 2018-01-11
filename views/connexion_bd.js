//Exxemple de connexion à une BDD MySQL
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'store'
});

connection.connect();

connection.query('SELECT * from products', function (err, rows, fields) {
    if (!err)
        logger.info('Le résultat de la requête: ', rows);
    else
        logger.error(err);
});

connection.end();