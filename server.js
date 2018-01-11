var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var logger = require('log4js').getLogger('Server');
var bodyParser = require('body-parser');
var app = express();

// config
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json({ extended: false }));
app.use(morgan('combined')); // Active le middleware de logging

app.use(express.static(__dirname + '/public')); // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)

logger.info('server start');

app.get('/', function(req, res){
    res.redirect('/login');
});

app.post('/login', function(req, res){
    Console.log("log of the post");
    res.render('login');
});

app.get('/ping', function(req, res){
    res.send('pong');
});

app.listen(process.env.PORT||1313);



