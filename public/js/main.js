// onclick functions for index.html page
$(document).ready(function () {
    $("#questionnaireStart").on("click", function (event) {
        console.log("Start Questionnaire");
        $("#questionnaireStart").addClass("hide");
    });

    $("#survey-btn").on("click", function () {
        $("#questionnaireStart").addClass("hide");
    });

    // if submit cat option, splices first part of Q array 
    // if submit dog option, splices second part of Q array
});