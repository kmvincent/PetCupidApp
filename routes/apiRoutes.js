// so we pull the petfinder api results based on the first how many questions
// then from there we parse the text for keywords.
// how do we assign points based on keywords?
// And then rank each one. 


// every time they answer a question, it needs to be saved in session memory...then api is pulled from session memory on the last page, then text parser is run on those results, and compared to my math somehow?...then can click save and it's saved to db....


// And then rank each one. 



const express = require("express");

const router = express.Router();

//const burger = require("../models/burger.js");

// module.exports = function (app) {
    router.post("/pf", function (req, res) {
        // console.log(req.body.zip);
        // console.log(req.body.method);
        let zip = req.body.zip;
        var method = req.body.method;
        var key = 'eb472865553c02a68dd15a9285d88af4';

        var queryUrl = `http://api.petfinder.com/${method}?format=json&key=${key}&location=${zip}&output=full`;
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            //doesn't console.log but can click on link in console
        })
        // burger.create([
        //     "burger_name", "devoured"
        // ], [
        //         req.body.name, false
        //     ], function (result) {
        //         res.json({ id: result.insertId });
        //     });
    });
// }

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.update({
//         devoured: true
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


module.exports = router;
