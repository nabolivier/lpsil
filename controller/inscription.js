var db = require("../model/user.js");
var Sequelize = require('sequelize');
//var session = require('express-session');
var express = require('express');

/*var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));*/

module.exports = function(req, res){

    db.create({ name: req.body["username"], password: req.body["password"]}).then(function (user) {
        /*app.use(function (req, res, next) {
            req.session.user=user[0].dataValues.username;
            console.log('Session : ', req.session.user);
            next();
        });*/
        //res.cookie( "name" ,req.session.user ,{ maxAge: 1000 * 60 * 10, httpOnly: false });

        res.redirect("accueil");
    }).catch(function (error) {

    });
};