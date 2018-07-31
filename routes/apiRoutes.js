// so we pull the petfinder api results based on the first how many questions
// then from there we parse the text for keywords.

// how do we assign points based on keywords?

// And then rank each one. 



const express = require("express");

const router = express.Router();

let dotenv = require('dotenv').config();



module.exports = function (app) {

    let playfulCatKeyWordArr = ['play', 'playful', 'energy', 'energetic', 'trouble', 'entertain', 'entertaining', 'wrestle', 'run', 'running', 'active']
    let lapCatKeyWordArr = ['lap', 'lapcat', 'sit', 'curl', 'snuggle', 'snuggler', 'brush', 'rub', 'tummy', 'burrow', 'hold', 'held']

    // will pull pets from database based on quiz criteria (first section, needs to be added as variables)
    app.post("/pf", function (req, res) {
        let zip = req.body.zip;
        var method = req.body.method;
        var key = process.env.PETFINDER_KEY;

        var queryUrl = `http://api.petfinder.com/${method}?format=json&key=${key}&location=${zip}&output=full`;

        var request = require('request');
        request(queryUrl, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the PetFinder api request homepage.
        });

        // $.ajax({
        //     url: queryUrl,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response)

            //filter out "options" section in response from petfinder api




            //text parsing
            //need to do for each result
            //full array of words to find (up above)

            //empty arrays to push found words into
            let foundPlayfulCatKeyWordArr = [];
            let foundLapCatKeyWordArr = [];
            //pull out string of text from each result
            //for each keyword in each array, scan through each text and push into found__KeyWordArr
            //count number of words in each array and calculate cat personality results
        //})

    });
}



// module.exports = router;