var db = require("../db.js");
var Sequelize = require('sequelize');

const User = db.define('user', {
        name: Sequelize.STRING,
        password: Sequelize.STRING,
        admin: Sequelize.INTEGER
    }
    , {
        tableName : 'user',
        deletedAt : false,
        freezeTableName: true
    });

User.sync();

db.authenticate()
    .then(function () {
        console.log("Connected");
    })
    .catch(function (err) {
        console.log("Unable to connect : " + err);
    })
    .done();

module.exports = User;
