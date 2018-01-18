var db = require("../model/products.js");
var Sequelize = require('sequelize');
var express = require('express');

module.exports = function(req, res){

    db.create({ name: req.body["name"], description: req.body["desc"], price: req.body["price"]}).then(function (product) {

        res.redirect("admin");
    }).catch(function (error) {

    });
};