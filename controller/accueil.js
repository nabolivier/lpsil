var db = require("../model/products.js");
var Sequelize = require('sequelize');
var express = require('express');

module.exports = function(req, res) {
    //-------------
    // Récupération de la liste des produits
    //-------------
    var list;
    db.findAll()
        .then(function (productList) {
            list = productList;
            res.render('accueil', {list: list});
        }).catch(function (error) {

        console.log("Error while finding products list : " + error);
        res.render("418");
    });
    //-------------
    console.log(list);
}