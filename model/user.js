var db = require("../db.js");
var Sequelize = require('sequelize');

const user = db.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

db.authenticate()
    .then(function () {
        console.log("Connected");
    })
    .catch(function (err) {
        console.log("Unable to connect : " + err);
    })
    .done();

module.exports = user;