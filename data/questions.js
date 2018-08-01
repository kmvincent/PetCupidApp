// for ranking importance of each Q, need to grab each Q then be able to place in the order you want...from there it assigns a value to each position....


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
        // first 11 Qs are for dogs, then switches to cats
        question: "Do you have a specific breed in mind?",
        id: 2,
        questionNo: 2,
        progress: "18.18%",
        answers: [
            {
                option: "No preference",
                icon: "placeholder.png",
                ajax: '&breed='
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
                ajax: '&size='
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
                ajax: '&sex='
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
        answers: [
            {
                textBox: true,
                id: 5
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Which criteria would you like to REQUIRE?",
        id: 6,
        questionNo: 6,
        progress: "54.54%",
        checkbox: true,
        // should these be done differently so can require they MUST be able to live with other pets/kids? And special needs - some people will want specifically - some not at all
        answers: [
            {
                option: "Must already be fixed (spayed/neutered).",
                icon: "placeholder.png",
                optionNumber: 1,
                descriptor: "fixed"
            },
            {
                option: "Must already be up-to-date on shots.",
                icon: "placeholder.png",
                optionNumber: 2,
                descriptor: "shots"
            },
            {
                option: "Must already be house-trained.",
                icon: "placeholder.png",
                optionNumber: 3,
                descriptor: "housetrained"
            },
            {
                option: "Must not have special needs.",
                icon: "placeholder.png",
                optionNumber: 5,
                descriptor: "specialNeeds"
            },
            {
                option: "Must be able to live with kids.",
                icon: "placeholder.png",
                optionNumber: 6,
                descriptor: "noKids"
            },
            {
                option: "Must be able to live with cats.",
                icon: "placeholder.png",
                optionNumber: 7,
                descriptor: "noCats"

            },
        ]
    },
    {
        question: "Placeholder",
        id: 7,
        questionNo: 7,
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
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
                option: "1 - Not playful at all",
                icon: "placeholder.png",
            }
        ]
    },
    {
        question: "Placeholder",
        id: 8,
        questionNo: 8,
        progress: "72.72%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
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
                option: "1 - Not playful at all",
                icon: "placeholder.png",
            }
        ]
    },
    {
        question: "Placeholder",
        id: 9,
        questionNo: 9,
        progress: "81.81%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
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
                option: "1 - Not playful at all",
                icon: "placeholder.png",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Placeholder",
        id: 10,
        questionNo: 10,
        progress: "90.9%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
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
                option: "1 - Not playful at all",
                icon: "placeholder.png",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "Placeholder",
        id: 11,
        questionNo: 11,
        progress: "100%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
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
                option: "1 - Not playful at all",
                icon: "placeholder.png",
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
        progress: "18.18%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: '&size='
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
        progress: "27.27%",
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
                ajax: '&sex='
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
        progress: "36.36%",
        answers: [
            {
                textBox: true,
                id: 14
            }
        ]
    },
    // filtered after ajax request and before text parsing (given in "options", but can't send to api to filter for us)
    {
        // this will relate to pf filter
        question: "Which criteria would you like to REQUIRE?",
        id: 15,
        questionNo: 5,
        progress: "45.45%",
        checkbox: true,
        answers: [
            {
                option: "Must already be fixed (spayed/neutered).",
                icon: "placeholder.png",
                optionNumber: 1,
                descriptor: "fixed"
            },
            {
                option: "Must already be up-to-date on shots.",
                icon: "placeholder.png",
                optionNumber: 2,
                descriptor: "shots"
            },
            {
                option: "Must already be house-trained.",
                icon: "placeholder.png",
                optionNumber: 3,
                descriptor: "housetrained"
            },
            {
                option: "Must be declawed. DECLAWING IS MUTILATION. DO NOT DECLAW AN UNDECLAWED ANIMAL. IF HAVING A DECLAWED CAT IS IMPORTANT TO YOU, PLEASE CHECK THIS BOX TO SAVE AN ALREADY DECLAWED CAT.",
                icon: "placeholder.png",
                optionNumber: 4,
                descriptor: "declawed"
            },
            {
                option: "Must not have special needs.",
                icon: "placeholder.png",
                optionNumber: 5,
                descriptor: "specialNeeds"
            },
            {
                option: "Must be able to live with kids.",
                icon: "placeholder.png",
                optionNumber: 6,
                descriptor: "noKids"
            },
            {
                option: "Must be able to live with dogs.",
                icon: "placeholder.png",
                optionNumber: 7,
                descriptor: "noDogs"
            },
            {
                option: "Must be able to live with other cats.",
                icon: "placeholder.png",
                optionNumber: 7,
                descriptor: "noCats"
            }
        ]

    },
    //personality questions; answers will be filtered through text parser
    {
        // this will relate to pf filter
        question: "How playful is your ideal cat?",
        id: 16,
        questionNo: 6,
        progress: "54.54%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
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
                option: "1 - Not playful at all",
                icon: "placeholder.png",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How much physical affection does your ideal cat like (petting, lap-sitting, etc.)?",
        id: 17,
        questionNo: 7,
        progress: "63.63%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very affectionate",
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
                option: "1 - Not affectionate at all",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How social is your ideal cat?",
        id: 18,
        questionNo: 8,
        progress: "72.72%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very social",
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
                option: "1 - Not social at all",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How independent is your ideal cat?",
        id: 19,
        questionNo: 9,
        progress: "81.81%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very independent",
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
                option: "1 - Very dependent",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How vocal is your ideal cat?",
        id: 20,
        questionNo: 10,
        progress: "90.9%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very vocal",
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
                option: "1 - Not vocal at all",
                icon: "placeholder.png",

            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How cautious around strangers can your ideal cat be?",
        id: 21,
        questionNo: 11,
        progress: "100%",
        selectOption: true,
        answers: [
            {
                option: "5 - Very cautious",
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
                option: "1 - Not cautious at all",
                icon: "placeholder.png",

            }
        ]
    },
];

module.exports = questionArray;