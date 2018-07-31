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
        // var fixed = req.body.fixed;
        // var shots = req.body.shots;
        // var housetrained = req.body.housetrained;
        // var declawed = req.body.declawed;
        // var specialNeeds = req.body.specialNeeds;
        // var noKids = req.body.noKids;
        // var noCats = req.body.noCats;
        // var noDogs = req.body.noDogs;

        //test values
        //requirements (ex must be fixed, etc)
        var fixed = true;
        var shots = false;
        var housetrained = false;
        var declawed = false;
        //allowable (ex special needs are ok, wont be around kids, etc)
        var specialNeeds = true;
        var noKids = true;
        var noCats = true;
        var noDogs = true;

        var queryUrl = `http://api.petfinder.com/${method}?format=json&key=${key}&location=${zip}&output=full`;

        var request = require('request');
        request(queryUrl, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            let responseObject = JSON.parse(body);
            let petsObject = responseObject.petfinder.pets.pet;
            let eligiblePetId = [];


            //filter out "options" section in response from petfinder api

            let ineligibleIndices = [];

            //loop through each pet
            for (let i = 0; i < petsObject.length; i++) {

                //if something ineligible happens, remove from petsObject (within each loop)


                let petOptions = petsObject[i].options.option
                //console.log(typeof petOptions)
                //if nothing has been checked under a pet, insert an empty array so it doesn't break
                if (typeof petOptions == "undefined") {
                    petOptions = [];
                }
                //console.log(petOptions)

                
                //if user checks must be already fixed
                if (fixed == true) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'altered') {
                            console.log(`${petsObject[i].name.$t} is fixed!`);
                            break;
                        }
                        else {
                            console.log(`${petsObject[i].name.$t} ineligible`)
                            ineligibleIndices.push(i);
                            break;
                        }
                        //console.log(`${petsObject[i].name.$t}: ${petOptions[j].$t}`)
                    }
                }
                //if user checks must be already up to date on shots
                if (shots == true) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'hasShots') {
                            console.log(`${petsObject[i].name.$t} is up-to-date on shots!`);
                            break;
                        }
                        else {
                            console.log(`${petsObject[i].name.$t} ineligible`)
                            ineligibleIndices.push(i);
                            break;
                        }
                        
                        
                    }
                }
                //if user checks must be already housetrained
                if (housetrained == true) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'housetrained') {
                            console.log(`${petsObject[i].name.$t} goes wee-wee in the right place!`);
                            break;
                        }
                        else {
                            console.log(`${petsObject[i].name.$t} ineligible`)
                            ineligibleIndices.push(i);
                            break;
                        }
                    }
                }
                //if user checks must be declawed
                if (declawed == true) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'declawed') {
                            console.log(`${petsObject[i].name.$t} has been declawed :(`);
                            break;
                        }
                        else {
                            console.log(`${petsObject[i].name.$t} ineligible`)
                            ineligibleIndices.push(i);
                            break;
                        }
                        
                    }
                }
                //if user doesn't check special needs are ok
                if (specialNeeds == false) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'specialNeeds') {
                            console.log(`${petsObject[i].name.$t} has special needs and isn't suitable for this user.`);
                            ineligibleIndices.push(i);
                            break;
                        }
                        
                    }
                }
                //if user doesn't check no kids is ok
                if (noKids == false) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'noKids') {
                            console.log(`${petsObject[i].name.$t} can't be around kids and isn't suitable for this user.`);
                            ineligibleIndices.push(i);
                            break;
                        }
                        
                    }
                }
                //if user doesn't check no other cats is ok
                if (noCats == false) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'noCats') {
                            console.log(`${petsObject[i].name.$t} can't be around other cats and isn't suitable for this user.`);
                            ineligibleIndices.push(i);
                            break;
                        }
                        
                    }
                }
                //if user doesn't check no other dogs is ok
                if (noDogs == false) {
                    //loop through options list from api
                    for (let j = 0; j < petOptions.length; j++) {
                        //if pet options list contains altered, return true
                        if (petOptions[j].$t == 'noDogs') {
                            console.log(`${petsObject[i].name.$t} can't be around other dogs and isn't suitable for this user.`);
                            ineligibleIndices.push(i);
                            break;
                        }
                        
                    }
                }
            
            }
            console.log(ineligibleIndices)

            

            //console.log('body:', body.petfinder); // Print the HTML for the PetFinder api request homepage.



        });



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