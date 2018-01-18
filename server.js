var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var logger = require('log4js').getLogger('Server');
var bodyParser = require('body-parser');
var app = express();

// config
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended : false}));
app.use(morgan('combined')); // Active le middleware de logging

app.use(express.static(__dirname + '/public')); // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)

logger.info('server start');

var usercontroller = require("./controller/user");

app.get('/create', usercontroller);

app.get('/', function(req, res){
    res.redirect('/login');
});

app.get('/login', function(req, res){
    res.render('login', {
        "notfound": "hidden"
    });
});

app.get('/ping', function(req, res){
    res.send('pong');
});

app.get('/inscription', function (req, res) {
    res.render('inscription')
});

var logincontroller = require('./controller/login');
app.post('/login', logincontroller);

var inscriptioncontroller = require('./controller/inscription');
app.post('/inscription', inscriptioncontroller);

var accueilcontroller = require('./controller/accueil');
app.get('/accueil', accueilcontroller);

var admincontroller = require('./controller/admin');
app.get('/admin', admincontroller);

var removeproductscontroller = require('./controller/supprimer');
app.post('/supprimer', removeproductscontroller);

app.get('/ajouter', function (req, res) {
    res.render('ajouter');
});

var addproductscontroller = require('./controller/ajouter');
app.post('/ajouter', addproductscontroller);

// --------------------------
// Autres exemples de post
/*app.get('/params/:par1/:par2', function (req, res) {
    console.log(req.params);
});

app.get('/query', function (req, res) {
    console.log(req.query);
});*/
// --------------------------

app.listen(process.env.PORT||1313);
