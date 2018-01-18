var db = require("../db.js");
var Sequelize = require('sequelize');

const Products = db.define('products', {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.INTEGER
    }
    , {
        tableName : 'products',
        deletedAt : false,
        freezeTableName: true
    });

Products.sync();

db.authenticate()
    .then(function () {
        console.log("Connected");
    })
    .catch(function (err) {
        console.log("Unable to connect : " + err);
    })
    .done();

//-------------
// Création de produits d'exemples si besoin
//-------------
//Products.create({ name: "Très petite éolienne", description: "Production de 10 kWh", price: 10000});
//Products.create({ name: "Petite éolienne", description: "Production de 30 kWh", price: 20000});
//Products.create({ name: "Eolienne moyenne", description: "Production de 150 kWh", price: 50000});
//Products.create({ name: "Grande éolienne", description: "Production de 400 kWh", price: 100000});

module.exports = Products;
