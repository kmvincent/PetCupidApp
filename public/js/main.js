// NEED to create log out btn that erases id from local memory and separate page for displaying results when logged in

// onclick functions for index.html page
$(document).ready(function () {
    // autocomplete breed options
    $('input.autocomplete').autocomplete({
        data: {
            "Affenpinscher": null,
            "Afghan Hound": null,
            "Airedale Terrier": null,
            "Akbash": null,
            "Akita": null,
            "Alaskan Malamute": null,
            "American Bulldog": null,
            "American Eskimo Dog": null,
            "American Hairless Terrier": null,
            "American Staffordshire Terrier": null,
            "American Water Spaniel": null,
            "Anatolian Shepherd": null,
            "Appenzell Mountain Dog": null,
            "Australian Cattle Dog / Blue Heeler": null,
            "Australian Kelpie": null,
            "Australian Shepherd": null,
            "Australian Terrier": null,
            "Basenji": null,
            "Basset Hound": null,
            "Beagle": null,
            "Bearded Collie": null,
            "Beauceron": null,
            "Bedlington Terrier": null,
            "Belgian Shepherd / Laekenois": null,
            "Belgian Shepherd / Malinois": null,
            "Belgian Shepherd / Sheepdog": null,
            "Belgian Shepherd / Tervuren": null,
            "Bernese Mountain Dog": null,
            "Bichon Frise": null,
            "Black and Tan Coonhound": null,
            "Black Labrador Retriever": null,
            "Black Mouth Cur": null,
            "Bloodhound": null,
            "Blue Lacy": null,
            "Bluetick Coonhound": null,
            "Boerboel": null,
            "Bolognese": null,
            "Border Collie": null,
            "Border Terrier": null,
            "Borzoi": null,
            "Boston Terrier": null,
            "Bouvier des Flanders": null,
            "Boxer": null,
            "Boykin Spaniel": null,
            "Briard": null,
            "Brittany Spaniel": null,
            "Brussels Griffon": null,
            "Bull Terrier": null,
            "Bullmastiff": null,
            "Cairn Terrier": null,
            "Canaan Dog": null,
            "Cane Corso Mastiff": null,
            "Carolina Dog": null,
            "Catahoula Leopard Dog": null,
            "Cattle Dog": null,
            "Caucasian Sheepdog / Caucasian Ovtcharka": null,
            "Cavalier King Charles Spaniel": null,
            "Chesapeake Bay Retriever": null,
            "Chihuahua": null,
            "Chinese Crested Dog": null,
            "Chinese Foo Dog": null,
            "Chinook": null,
            "Chocolate Labrador Retriever": null,
            "Chow Chow": null,
            "Cirneco dell'Etna": null,
            "Clumber Spaniel": null,
            "Cockapoo": null,
            "Cocker Spaniel": null,
            "Collie": null,
            "Coonhound": null,
            "Corgi": null,
            "Coton de Tulear": null,
            "Curly-Coated Retriever": null,
            "Dachshund": null,
            "Dalmatian": null,
            "Dandi Dinmont Terrier": null,
            "Doberman Pinscher": null,
            "Dogo Argentino": null,
            "Dogue de Bordeaux": null,
            "Dutch Shepherd": null,
            "English Bulldog": null,
            "English Cocker Spaniel": null,
            "English Coonhound": null,
            "English Pointer": null,
            "English Setter": null,
            "English Setter": null,
            "English Springer Spaniel": null,
            "English Toy Spaniel": null,
            "Entlebucher": null,
            "Eskimo Dog": null,
            "Feist": null,
            "Field Spaniel": null,
            "Fila Brasileiro": null,
            "Finnish Lapphund": null,
            "Finnish Spitz": null,
            "Flat-Coated Retriever": null,
            "Fox Terrier": null,
            "Foxhound": null,
            "French Bulldog": null,
            "Galgo Spanish Greyhound": null,
            "German Pinscher": null,
            "German Shepherd Dog": null,
            "German Shorthaired Pointer": null,
            "German Spitz": null,
            "German Wirehaired Pointer": null,
            "Giant Schnauzer": null,
            "Glen of Imaal Terrier": null,
            "Golden Retriever": null,
            "Gordon Setter": null,
            "Great Dane": null,
            "Great Pyrenees": null,
            "Greater Swiss Mountain Dog": null,
            "Greyhound": null,
            "Hamiltonstovare": null,
            "Harrier": null,
            "Havanese": null,
            "Hound": null,
            "Hovawart": null,
            "Husky": null,
            "Ibizan Hound": null,
            "Icelandic Sheepdog": null,
            "Illyrian Sheepdog": null,
            "Irish Setter": null,
            "Irish Terrier": null,
            "Irish Water Spaniel": null,
            "Irish Wolfhound": null,
            "Italian Greyhound": null,
            "Italian Spinone": null,
            "Jack Russell Terrier": null,
            "Jack Russell Terrier (Parson)": null,
            "Japanese Chin": null,
            "Jindo": null,
            "Kai Dog": null,
            "Karelian Bear Dog": null,
            "Keeshond": null,
            "Kerry Blue Terrier": null,
            "Kishu": null,
            "Klee Kai": null,
            "Komondor": null,
            "Kuvasz": null,
            "Kyi Leo": null,
            "Labrador Retriever": null,
            "Lakeland Terrier": null,
            "Lancashire Heeler": null,
            "Leonberger": null,
            "Lhasa Apso": null,
            "Lowchen": null,
            "Maltese": null,
            "Manchester Terrier": null,
            "Maremma Sheepdog": null,
            "Mastiff": null,
            "McNab": null,
            "Miniature Pinscher": null,
            "Miniature Schnauzer": null,
            "Mixed Breed": null,
            "Mountain Cur": null,
            "Mountain Dog": null,
            "Munsterlander": null,
            "Neapolitan Mastiff": null,
            "New Guinea Singing Dog": null,
            "Newfoundland Dog": null,
            "Norfolk Terrier": null,
            "Norwegian Buhund": null,
            "Norwegian Elkhound": null,
            "Norwegian Lundehund": null,
            "Norwich Terrier": null,
            "Nova Scotia Duck Tolling Retriever": null,
            "Old English Sheepdog": null,
            "Otterhound": null,
            "Papillon": null,
            "Patterdale Terrier / Fell Terrier": null,
            "Pekingese": null,
            "Peruvian Inca Orchid": null,
            "Petit Basset Griffon Vendeen": null,
            "Pharaoh Hound": null,
            "Pit Bull Terrier": null,
            "Plott Hound": null,
            "Podengo Portugueso": null,
            "Pointer": null,
            "Polish Lowland Sheepdog": null,
            "Pomeranian": null,
            "Poodle": null,
            "Portuguese Water Dog": null,
            "Presa Canario": null,
            "Pug": null,
            "Puli": null,
            "Pumi": null,
            "Rat Terrier": null,
            "Redbone Coonhound": null,
            "Retriever": null,
            "Rhodesian Ridgeback": null,
            "Rottweiler": null,
            "Rough Collie": null,
            "Saint Bernard / St. Bernard": null,
            "Saluki": null,
            "Samoyed": null,
            "Sarplaninac": null,
            "Schipperke": null,
            "Schnauzer": null,
            "Scottish Deerhound": null,
            "Scottish Terrier Scottie": null,
            "Sealyham Terrier": null,
            "Setter": null,
            "Shar Pei": null,
            "Sheep Dog": null,
            "Shepherd": null,
            "Shetland Sheepdog Sheltie": null,
            "Shiba Inu": null,
            "Shih Tzu": null,
            "Siberian Husky": null,
            "Silky Terrier": null,
            "Skye Terrier": null,
            "Sloughi": null,
            "Smooth Collie": null,
            "Smooth Fox Terrier": null,
            "South Russian Ovtcharka": null,
            "Spaniel": null,
            "Spanish Water Dog": null,
            "Spitz": null,
            "Staffordshire Bull Terrier": null,
            "Standard Poodle": null,
            "Standard Schnauzer": null,
            "Sussex Spaniel": null,
            "Swedish Vallhund": null,
            "Terrier": null,
            "Thai Ridgeback": null,
            "Tibetan Mastiff": null,
            "Tibetan Spaniel": null,
            "Tibetan Terrier": null,
            "Tosa Inu": null,
            "Toy Fox Terrier": null,
            "Treeing Walker Coonhound": null,
            "Vizsla": null,
            "Weimaraner": null,
            "Welsh Corgi": null,
            "Welsh Springer Spaniel": null,
            "Welsh Terrier": null,
            "West Highland White Terrier Westie": null,
            "Wheaten Terrier": null,
            "Whippet": null,
            "White German Shepherd": null,
            "Wire Fox Terrier": null,
            "Wirehaired Dachshund": null,
            "Wirehaired Pointing Griffon": null,
            "Wirehaired Terrier": null,
            "Xoloitzcuintle / Mexican Hairless": null,
            "Yellow Labrador Retriever": null,
            "Yorkshire Terrier Yorkie": null,
        },
    });

    // dropdown select menu
    $('select').formSelect();

    // sign in modal
    $('.modal').modal();

    let queryArray = [];
    let newAnswer = "";

    // hide current Q section, show the next Q section
    function goToNextQuestion(currentQuestionID) {
        $("#questionSection-" + currentQuestionID).addClass("hide");
        $("#questionSection-" + (parseInt(currentQuestionID) + 1)).removeClass("hide");
    };

    // reveal the first Q to begin survey
    $("#questionSection-1").removeClass("hide");

    // drop down to 1st Q and hide headers when begin survey
    $("#questionnaireStart").on("click", function (event) {
        console.log("Start Questionnaire");
        $("#questionnaireStart").addClass("hide");
    });

    // changes value of newAnswer to the most recently clicked answer-tile 
    $(".answer-tile").on("click", function () {
        if ($(this).data("ajax") != "") {
            newAnswer = $(this).attr("data-ajax");
        } else {
            newAnswer = $(this).children("p").html();
        };
    });

    // when click submit btn to answer to each survey Q
    $(".survey-answer-btn").on("click", function () {
        // if didn't click the qStart button, clicking the first next-btn will hide the header as well
        $("#questionnaireStart").addClass("hide");
        // switch case to hide/reveal each Q as user moves through survey and add answer to queryArray
        switch ($(this).attr("id")) {
            case "next-btn-1":
                // if cat answer was selected, jump down to cat Qs next (start at 12)
                if (newAnswer === "&animal=cat") {
                    $("#questionSection-1").addClass("hide");
                    $("#questionSection-12").removeClass("hide");
                } else {
                    // else stick with dog Qs
                    $("#questionSection-1").addClass("hide");
                    $("#questionSection-2").removeClass("hide");
                };
                queryArray.push(newAnswer);
                break;
            case "next-btn-2":
                if ($("#autocomplete-input").val() != "") {
                    newAnswer = "&breed=" + $("#autocomplete-input").val();
                }
                goToNextQuestion(2);
                queryArray.push(newAnswer);
                break;
            case "next-btn-3":
                goToNextQuestion(3);
                queryArray.push(newAnswer);
                break;
            case "next-btn-4":
                goToNextQuestion(4);
                queryArray.push(newAnswer);
                break;
            case "next-btn-5":
                if ($("#zip_code_5").val() === "") {
                    newAnswer = "&location=55401";
                } else {
                    newAnswer = "&location=" + $("#zip_code_5").val();
                }
                goToNextQuestion(5);
                queryArray.push(newAnswer);
                break;
            case "next-btn-6":
                if ($('input[type=checkbox]:checked').length > 0) {
                    var checkedQVals = $('input[type=checkbox]:checked').map(function () {
                        return this.value;
                    }).get();
                    newAnswer = checkedQVals;
                } else {
                    newAnswer = "";
                }
                goToNextQuestion(6);
                queryArray.push(newAnswer);
                break;
            case "next-btn-7":
                newAnswer = $("#select-7").val();
                goToNextQuestion(7);
                queryArray.push(newAnswer);
                break;
            case "next-btn-8":
                newAnswer = $("#select-8").val();
                goToNextQuestion(8);
                queryArray.push(newAnswer);
                break;
            case "next-btn-9":
                newAnswer = $("#select-9").val();
                goToNextQuestion(9);
                queryArray.push(newAnswer);
                break;
            case "next-btn-10":
                newAnswer = $("#select-10").val();
                goToNextQuestion(10);
                queryArray.push(newAnswer);
                break;
            case "next-btn-11":
                newAnswer = $("#select-11").val();
                $("#questionSection-11").addClass("hide");
                queryArray.push(newAnswer);
                console.log(queryArray);

                // new dog search
                let dogSearch = {
                    queryUrlParams: queryArray[0] + queryArray[1] + queryArray[2] + queryArray[3] + queryArray[4],
                    requiredOptions: queryArray[5],
                    personalityQ1: queryArray[6],
                    personalityQ2: queryArray[7],
                    personalityQ3: queryArray[8],
                    personalityQ4: queryArray[9],
                    personalityQ5: queryArray[10],
                }
                console.log(dogSearch);
                // post to backend to be sent to petfinder
                $.post("/pf", dogSearch).then(function (data) {
                    console.log(data);
                    console.log("HI WE ARE HERE")
                // window.location.replace("/results")
            });

                // redirect to results page
                window.location.replace("/results")
                break;

            // Switch to cat Qs
            case "next-btn-12":
                goToNextQuestion(12);
                queryArray.push(newAnswer);
                break;
            case "next-btn-13":
                goToNextQuestion(13);
                queryArray.push(newAnswer);
                break;
            case "next-btn-14":
                if ($("#zip_code_14").val() === "") {
                    newAnswer = "&location=55401";
                } else {
                    newAnswer = "&location=" + $("#zip_code_14").val();
                }
                goToNextQuestion(14);
                queryArray.push(newAnswer);
                break;
            case "next-btn-15":
                if ($('input[type=checkbox]:checked').length > 0) {
                    var checkedQVals = $('input[type=checkbox]:checked').map(function () {
                        return this.value;
                    }).get();
                    newAnswer = checkedQVals;
                } else {
                    newAnswer = "";
                }
                goToNextQuestion(15);
                queryArray.push(newAnswer);
                break;
            case "next-btn-16":
                newAnswer = $("#select-16").val();
                goToNextQuestion(16);
                queryArray.push(newAnswer);
                break;
            case "next-btn-17":
                newAnswer = $("#select-17").val();
                goToNextQuestion(17);
                queryArray.push(newAnswer);
                break;
            case "next-btn-18":
                newAnswer = $("#select-18").val();
                goToNextQuestion(18);
                queryArray.push(newAnswer);
                break;
            case "next-btn-19":
                newAnswer = $("#select-19").val();
                goToNextQuestion(19);
                queryArray.push(newAnswer);
                break;
            case "next-btn-20":
                newAnswer = $("#select-20").val();
                goToNextQuestion(20);
                queryArray.push(newAnswer);
                break;
            case "next-btn-21":
                newAnswer = $("#select-21").val();
                $("#questionSection-21").addClass("hide");
                queryArray.push(newAnswer);
                console.log(queryArray);

                // new cat search
                let catSearch = {
                    queryUrlParams: queryArray[0] + queryArray[1] + queryArray[2] + queryArray[3],
                    requiredOptions: queryArray[4],
                    personalityQ1: queryArray[5],
                    personalityQ2: queryArray[6],
                    personalityQ3: queryArray[7],
                    personalityQ4: queryArray[8],
                    personalityQ5: queryArray[9],
                    personalityQ6: queryArray[10],
                }
                console.log(catSearch);
                // post to backend to be sent to petfinder
                $.post("/pf", catSearch).then(function (data) {
                    console.log(data);
                });

                // redirect to results page
                window.location.replace("/results")
                break;
        };
    });

    // when click save button on results page
    $(".save-btn").on("click", function () {

        // if user already signed in
        if (localStorage.getItem("id") != null) {

            // removing "id" from save btn id to just have petID "number"
            savedPetId = $(this).attr("id").slice(2);
            // unhiding that item from the modal list
            $("#mid" + savedPetId).removeClass("hide");

            // if logged in, change the savebtn href to trigger modal not sign in
            $(".save-btn").attr("href", "#modal1")
        } else {
            // Show the log in pop-up
            $("#userSignInSection").removeClass("hide");

            // still want to unhide pet from saved modal once log in complete
            savedPetId = $(this).attr("id").slice(2);
            console.log(savedPetId);
            // unhiding that item from the modal list
            $("#mid" + savedPetId).removeClass("hide");
        }

        // this is currently not making an association
        // left DB part off here
        $.get("/api/pet/" + savedPetId)
            .then(function (result) {
                // if the pet is not already in db, add it
                if (!result) {
                    newPet = {
                        id: savedPetId,
                        AdopterId: localStorage.getItem("id"),
                        isNew: true
                    }

                    $.post("/api/pet/" + savedPetId, newPet)
                        //
                        .then(function (data) {
                            // log the data we found
                            console.log(data);
                            console.log("pet has been added to db")
                        })
                } else {
                    newInterest = {
                        PetId: result.id,
                        AdopterId: localStorage.getItem("id"),
                    };

                    $.post("/api/pet/" + savedPetId, newInterest)
                        .then(function (data) {
                            // log the data we found
                            console.log(data);
                            console.log("already in db")
                        });
                    console.log("else sttmt");
                }
            });
    });

    // when register as new user (click register btn)
    $("#register-btn").on("click", function (event) {
        event.preventDefault();

        // makes a newUser obj from the info the user enters
        var newUser = {
            firstName: $("#first_name").val().trim(),
            lastName: $("#last_name").val().trim(),
            email: $("#email").val().trim(),
            password: $("#passwords").val()
        };

        // send an AJAX POST-request with jQuery to save that user to DB
        $.post("/api/users", newUser)

            .then(function (data) {
                // then adds their user ID to local storage so their pet saves will continue to be associated with them
                console.log(data);
                localStorage.clear();
                localStorage.setItem("id", data);
            });

    });

    $("#reloadBtn").on("click", function (event) {
        event.preventDefault();
        console.log("clicked")
        $("reload").addClass("hide")
        $("#results-section").removeClass("hide");
    });
});