// need function that will hide/show based on parameter that matches id i think....

// onclick functions for index.html page
$(document).ready(function () {
    let queryArray = [];
    let newAnswer = "";

    function goToNextQuestion(currentQuestionID) {
        $("#questionSection-" + currentQuestionID).addClass("hide");
        $("#questionSection-" + (parseInt(currentQuestionID) + 1)).removeClass("hide");
    };

    // reveal the first Q of survey
    $("#questionSection-1").removeClass("hide");

    // drop down to 1st Q and hide headers
    $("#questionnaireStart").on("click", function (event) {
        console.log("Start Questionnaire");
        $("#questionnaireStart").addClass("hide");
    });

    // if didn't click the qStart button, clicking the first next-btn will
    $(".survey-btn").on("click", function () {
        $("#questionnaireStart").addClass("hide");
        switch ($(this).attr("id")) {
            case "next-btn-2":
                goToNextQuestion(2);
                break;
            case "next-btn-3":
                goToNextQuestion(3);
                break;
            case "next-btn-4":
                goToNextQuestion(4);
                break;
            case "next-btn-5":
                goToNextQuestion(5);
                break;
            case "next-btn-6":
                goToNextQuestion(6);
                break;
            case "next-btn-7":
                goToNextQuestion(7);
                break;
            case "next-btn-8":
                goToNextQuestion(8);
                break;
            case "next-btn-9":
                goToNextQuestion(9);
                break;
            case "next-btn-10":
                goToNextQuestion(10);
                break;
            case "next-btn-11":
                // goToNextQuestion(3);
                console.log("dog last Q)");
                break;
            case "next-btn-12":
                goToNextQuestion(12);
                break;
            case "next-btn-13":
                goToNextQuestion(13);
                break;
            case "next-btn-14":
                goToNextQuestion(14);
                break;
            case "next-btn-15":
                goToNextQuestion(15);
                break;
            case "next-btn-16":
                goToNextQuestion(16);
                break;
            case "next-btn-17":
                goToNextQuestion(17);
                break;
            case "next-btn-18":
                goToNextQuestion(18);
                break;
            case "next-btn-19":
                goToNextQuestion(19);
                break;
            case "next-btn-20":
                goToNextQuestion(20);
                break;
            case "next-btn-21":
                console.log("cat last Q)");
                break;
        };
    });

    // console logs which answer was most recently clicked
    $(".answer-tile").on("click", function () {
        newAnswer = $(this).children("p").html();
        console.log(newAnswer)
    });

    // when submit first question answer
    $("#next-btn-1").on("click", function () {
        // if cat answer was selected, jump down to cat Qs next
        if (newAnswer == "Cat") {
            $("#questionSection-1").addClass("hide");
            $("#questionSection-12").removeClass("hide");
        } else {
            // else stick with dog Qs
            $("#questionSection-1").addClass("hide");
            $("#questionSection-2").removeClass("hide");
        }
    });
});