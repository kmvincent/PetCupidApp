// array of Qs, each one has Question and answers, and each answer has an icon
// for ranking importance of each Q, need to grab each Q then be able to place in the order you want...from there it assigns a value to each position....

// first four in keyWordArray are sometimes listed in the "options" sections of api response
dogKeyWordArray = ["noKids", "noCats", "specialNeeds", "housetrained", ""]


questionArray = [
    {
        // this will relate to pf filter
        question: "Are you looking for a cat or dog?",
        id: 1,
        questionNo: 1,
        progress: "9.09%",
        answers: [
            {
                option: "Cat",
                icon: "placeholder.png",
                ajax: "&animal=cat"
            },
            {
                option: "Dog",
                icon: "placeholder.png",
                ajax: "&animal=dog"
            }
        ]
    },
    {
        // this will relate to pf filter
        // first ___ Qs are for dogs, then switches to cats
        question: "Do you have a specific breed in mind?",
        id: 2,
        questionNo: 2,
        progress: "18.18%",
        answers: [
            {
                option: "No preference",
                icon: "placeholder.png",
                ajax: '&breed=""'
            },
            {
                option: "Yes",
                icon: "placeholder.png",
                autocomplete: true,
                // Make dropdown of breeds they can choose
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "What size dog would you prefer?",
        id: 3,
        questionNo: 3,
        progress: "27.27%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: '&size=""'
            },
            {
                option: "Small",
                icon: "placeholder.png",
                ajax: "&size=S"
            },
            {
                option: "Medium",
                icon: "placeholder.png",
                ajax: "&size=M"
            },
            {
                option: "Large",
                icon: "placeholder.png",
                ajax: "&size=L"

            },
            {
                option: "Extra Large",
                icon: "placeholder.png",
                ajax: "&size=XL"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 4,
        questionNo: 4,
        progress: "36.36%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: '&sex=""'
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Enter your zip code.",
        id: 5,
        questionNo: 5,
        progress: "45.45%",
        textBox: "12345",
        // need a way to add their zip to this...
        ajax: "&location="
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 6,
        questionNo: 6,
        progress: "54.54%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: "",
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 7,
        questionNo: 7,
        progress: "63.63%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 8,
        questionNo: 8,
        progress: "72.72%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 9,
        questionNo: 9,
        progress: "81.81%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 10,
        questionNo: 10,
        progress: "90.9%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 11,
        questionNo: 11,
        progress: "100%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    //CAT QUESTIONS
    //questions to get put into ajax request
    {
        // this will relate to pf filter
        question: "What size cat would you prefer?",
        id: 12,
        questionNo: 2,
        progress: "10%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: '&size=""'
            },
            {
                option: "Small",
                icon: "placeholder.png",
                ajax: "&size=S"
            },
            {
                option: "Medium",
                icon: "placeholder.png",
                ajax: "&size=M"
            },
            {
                option: "Large",
                icon: "placeholder.png",
                ajax: "&size=L"

            },
            {
                option: "Extra Large",
                icon: "placeholder.png",
                ajax: "&size=XL"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 13,
        questionNo: 3,
        progress: "10%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: '&sex=""'
            },
            {
                option: "Female",
                icon: "placeholder.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "placeholder.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Enter your zip code.",
        id: 14,
        questionNo: 4,
        progress: "10%",
        textBox: "12345",
        // need a way to add their zip to this...
        ajax: "&location="
    },
    // filtered after ajax request and before text parsing (given in "options", but can't send to api to filter for us)
    {
        // this will relate to pf filter
        question: "Which criteria would you like to REQUIRE?",
        id: 15,
        questionNo: 5,
        progress: "10%",
        //should be checkboxes that allow multiple options to be chosen (or we can make these separate questions)
        answers: [
            {
                option: "Must already be fixed (spayed/neutered).",
                icon: "placeholder.png",
            },
            {
                option: "Must already be up-to-date on shots.",
                icon: "placeholder.png",
            },
            {
                option: "Must already be house-trained.",
                icon: "placeholder.png",
            },
            {
                option: "Must be declawed. DECLAWING IS MUTILATION. DO NOT DECLAW AN UNDECLAWED ANIMAL. IF HAVING A DECLAWED CAT IS IMPORTANT TO YOU, PLEASE CHECK THIS BOX TO SAVE AN ALREADY DECLAWED CAT.",
                icon: "placeholder.png",
            },
            {
                option: "I am able to adopt a special needs cat!",
                icon: "placeholder.png",
            },
            {
                option: "I am able to adopt a cat that can't live with children!",
                icon: "placeholder.png",
            },
            {
                option: "I am able to adopt a cat that can't live with other pets!",
                icon: "placeholder.png",
            },
        ]

    },
    //personality questions; answers will be filtered through text parser
    //drop down lists of 1-5?
    {
        // this will relate to pf filter
        question: "How playful is your ideal cat?",
        id: 16,
        questionNo: 6,
        progress: "10%",
        answers: [
            {
                option: "5",
                icon: "placeholder.png",
            },
            {
                option: "4",
                icon: "placeholder.png",
            },
            {
                option: "3",
                icon: "placeholder.png",

            },
            {
                option: "2",
                icon: "placeholder.png",

            },
            {
                option: "1",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How much physical affection does your ideal cat like (petting, lap-sitting, etc.)?",
        id: 17,
        questionNo: 7,
        progress: "10%",
        answers: [
            {
                option: "5",
                icon: "placeholder.png",
            },
            {
                option: "4",
                icon: "placeholder.png",
            },
            {
                option: "3",
                icon: "placeholder.png",

            },
            {
                option: "2",
                icon: "placeholder.png",

            },
            {
                option: "1",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How social is your ideal cat?",
        id: 18,
        questionNo: 8,
        progress: "10%",
        answers: [
            {
                option: "5",
                icon: "placeholder.png",
            },
            {
                option: "4",
                icon: "placeholder.png",
            },
            {
                option: "3",
                icon: "placeholder.png",

            },
            {
                option: "2",
                icon: "placeholder.png",

            },
            {
                option: "1",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How independent is your ideal cat?",
        id: 19,
        questionNo: 9,
        progress: "10%",
        answers: [
            {
                option: "5",
                icon: "placeholder.png",
            },
            {
                option: "4",
                icon: "placeholder.png",
            },
            {
                option: "3",
                icon: "placeholder.png",

            },
            {
                option: "2",
                icon: "placeholder.png",

            },
            {
                option: "1",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How vocal is your ideal cat?",
        id: 20,
        questionNo: 10,
        progress: "10%",
        answers: [
            {
                option: "5",
                icon: "placeholder.png",
            },
            {
                option: "4",
                icon: "placeholder.png",
            },
            {
                option: "3",
                icon: "placeholder.png",

            },
            {
                option: "2",
                icon: "placeholder.png",

            },
            {
                option: "1",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How cautious around strangers can your ideal cat be?",
        id: 21,
        questionNo: 11,
        progress: "10%",
        answers: [
            {
                option: "5",
                icon: "placeholder.png",
            },
            {
                option: "4",
                icon: "placeholder.png",
            },
            {
                option: "3",
                icon: "placeholder.png",

            },
            {
                option: "2",
                icon: "placeholder.png",

            },
            {
                option: "1",
                icon: "placeholder.png",

            }
        ]
    },
];

module.exports = questionArray;