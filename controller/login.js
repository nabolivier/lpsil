var db = require("../model/user.js");
var Sequelize = require('sequelize');
var express = require('express');

module.exports = function(req, res){

    db.findOne({
        where: {name: req.body["username"]}
    }).then(function (user) {

        if(req.body["password"] === user["dataValues"]["password"]) {

            //-------------
            // Redirection selon le statut de l'utilisateur
            //-------------
            if(user["dataValues"]["admin"] === 0) { //Si c'est un utilisateur normal
                return res.redirect("accueil");
            }else{                                  //Si c'est un admin
                return res.redirect("admin");
            }
            //-------------
        }else{
            throw "incorrect password";
        }
    }).catch(function(error){

        console.log("Error while finding user : " + error);
        res.render("login", {
            "notfound": "visible"
        });
    })
};