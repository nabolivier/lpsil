var db = require("../model/products.js");
var Sequelize = require('sequelize');
var express = require('express');

module.exports = function(req, res) {

    db.findAll()
        .then(function (productList) {
            var list;
            list = productList;

            var len = req.param("len");

            for (i = 0; i < len; i++) {
                var nameToDestroy = list[req.param("p"+i)].name;
                db.destroy({
                    where: {
                        name: nameToDestroy
                    }
                })
            }
        }).catch(function (error) {

            console.log("Error while finding products list : " + error);
        });
    res.redirect("admin");
    //console.log("PARAM : " + req.param("len"));

};