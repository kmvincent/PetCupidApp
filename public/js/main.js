// need function that will hide/show based on parameter that matches id i think....

// onclick functions for index.html page
$(document).ready(function () {
    let queryArray = [];
    let newAnswer = "";

    $("#questionnaireStart").on("click", function (event) {
        console.log("Start Questionnaire");
        $("#questionnaireStart").addClass("hide");
    });

    // to hide header after submit first answer if not already hidden
    $("#survey-btn").on("click", function () {
        $("#questionnaireStart").addClass("hide");
    });

    // so only can select on option at a time
    $(".answer-tile").on("click", function () {
       newAnswer = $(this).children("p").html();
       console.log(newAnswer)
    });

    $(".survey-btn").on("click", function() {
        console.log(newAnswer)
    });

    // if submit cat option, splices first part of Q array 
    // if submit dog option, splices second part of Q array
    $("#next-btn-1").on("click", function () {
        if (newAnswer == "Cat") {
            console.log("kitty cut");
            $("")
        };
    });
});