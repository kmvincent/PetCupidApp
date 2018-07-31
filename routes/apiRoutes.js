// so we pull the petfinder api results based on the first how many questions
// then from there we parse the text for keywords.

// how do we assign points based on keywords?

// And then rank each one. 



const express = require("express");
const questions = require("../data/questions");

const router = express.Router();

let dotenv = require('dotenv').config();



module.exports = function (app) {

    // will pull pets from database based on quiz criteria (first section, needs to be added as variables)
    app.post("/pf", function (req, res) {
        let zip = req.body.zip;
        var method = req.body.method;
        var key = process.env.PETFINDER_KEY;

        var queryUrl = `http://api.petfinder.com/${method}?format=json&key=${key}&location=${zip}&output=full`;
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            //doesn't console.log but can click on link in console
        })
        
    });
}