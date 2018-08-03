questionArray = [
    {
        // everyone starts with this Q
        // this Q relates to pf filter
        question: "Are you looking for a cat or dog?",
        id: 1,
        questionNo: 1,
        // progress % to be displayed w/ materialize (all Qs have, total 100%)
        progress: "9.09%",
        answers: [
            {
                option: "Cat",
                icon: "cat.png",
                ajax: "&animal=cat"
            },
            {
                option: "Dog",
                icon: "dog.png",
                ajax: "&animal=dog"
            }
        ]
    },
    {
        // this Q relates to pf filter
        // then next 10 Qs are for dogs, then switches to cats
        question: "Do you have a specific breed in mind?",
        id: 2,
        questionNo: 2,
        progress: "18.18%",
        answers: [
            {
                option: "No preference",
                icon: "nopref.png",
                ajax: '&breed='
            },
            {
                option: "Yes",
                icon: "placeholder.png",
                // will display as text box with autocomplete in handlebars
                autocomplete: true,
            }
        ]
    },
    {
        // this Q relates to pf filter
        question: "What size dog would you prefer?",
        id: 3,
        questionNo: 3,
        progress: "27.27%",
        answers: [
            {
                option: "No Preference",
                icon: "nopref.png",
                ajax: '&size='
            },
            {
                option: "Small",
                icon: "dogsmall.png",
                ajax: "&size=S"
            },
            {
                option: "Medium",
                icon: "dogmedium.png",
                ajax: "&size=M"
            },
            {
                option: "Large",
                icon: "doglarge.png",
                ajax: "&size=L"

            },
            {
                option: "Extra Large",
                icon: "dogxlarge.png",
                ajax: "&size=XL"
            }
        ]
    },
    {
        // this Q relates to pf filter
        question: "Which sex would you prefer?",
        id: 4,
        questionNo: 4,
        progress: "36.36%",
        answers: [
            {
                option: "No Preference",
                icon: "nopref.png",
                ajax: '&sex='
            },
            {
                option: "Female",
                icon: "female.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "male.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this Q relates to pf filter
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
        // these criteria will be used to filter down further once AJAX response comes back from pf
        question: "Which criteria would you like to REQUIRE?",
        id: 6,
        questionNo: 6,
        progress: "54.54%",
        // this is indicator for displaying in handlebars
        checkbox: true,
        answers: [
            {
                option: "Must already be fixed (spayed/neutered).",
                // these descriptors related to pf response/api route terminology
                descriptor: "fixed"
            },
            {
                option: "Must already be up-to-date on shots.",
                descriptor: "shots"
            },
            {
                option: "Must already be house-trained.",
                descriptor: "housetrained"
            },
            {
                option: "Must not have special needs.",
                descriptor: "specialNeeds"
            },
            {
                option: "Must be able to live with kids.",
                descriptor: "noKids"
            },
            {
                option: "Must be able to live with cats.",
                descriptor: "noCats"

            },
        ]
    },
    //personality questions; answers will be filtered through text parser
    {
        question: "How playful is your ideal dog?",
        id: 7,
        questionNo: 7,
        progress: "60%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not playful at all",
            }
        ]
    },
    {
        question: "How much barking can you tolerate?",
        id: 8,
        questionNo: 8,
        progress: "72.72%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - The louder the better!",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Quiet please",
            }
        ]
    },
    {
        question: "How friendly is your ideal dog?",
        id: 9,
        questionNo: 9,
        progress: "81.81%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very friendly",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not friendly at all",
            }
        ]
    },
    {
        question: "How independent is your ideal dog?",
        id: 10,
        questionNo: 10,
        progress: "90.9%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very independent",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Very dependent",
            }
        ]
    },
    {
        question: "How active is your ideal dog",
        id: 11,
        questionNo: 11,
        progress: "100%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very active",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Doesn't need much exercise",
            }
        ]
    },
    //CAT QUESTIONS
    {
        // this Q relates to pf filter
        question: "What size cat would you prefer?",
        id: 12,
        questionNo: 2,
        progress: "18.18%",
        answers: [
            {
                option: "No Preference",
                icon: "nopref.png",
                ajax: '&size='
            },
            {
                option: "Small",
                icon: "catsmall.png",
                ajax: "&size=S"
            },
            {
                option: "Medium",
                icon: "catmedium.png",
                ajax: "&size=M"
            },
            {
                option: "Large",
                icon: "catlarge.png",
                ajax: "&size=L"

            },
            {
                option: "Extra Large",
                icon: "catxlarge.png",
                ajax: "&size=XL"
            }
        ]
    },
    {
        // this Q relates to pf filter
        question: "Which sex would you prefer?",
        id: 13,
        questionNo: 3,
        progress: "27.27%",
        answers: [
            {
                option: "No Preference",
                icon: "nopref.png",
                ajax: '&sex='
            },
            {
                option: "Female",
                icon: "female.png",
                ajax: "&sex=F"
            },
            {
                option: "Male",
                icon: "male.png",
                ajax: "&sex=M"
            }
        ]
    },
    {
        // this Q relates to pf filter
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
    {
        // these criteria will be used to filter down further once AJAX response comes back from pf
        question: "Which criteria would you like to REQUIRE?",
        id: 15,
        questionNo: 5,
        progress: "45.45%",
        // indicator for displaying in handlebars
        checkbox: true,
        answers: [
            {
                option: "Must already be fixed (spayed/neutered).",
                descriptor: "fixed"
            },
            {
                option: "Must already be up-to-date on shots.",
                descriptor: "shots"
            },
            {
                option: "Must already be house-trained.",
                descriptor: "housetrained"
            },
            {
                option: "Must be declawed. DECLAWING IS MUTILATION. DO NOT DECLAW AN UNDECLAWED ANIMAL. IF HAVING A DECLAWED CAT IS IMPORTANT TO YOU, PLEASE CHECK THIS BOX TO SAVE AN ALREADY DECLAWED CAT.",
                descriptor: "declawed"
            },
            {
                option: "Must not have special needs.",
                descriptor: "specialNeeds"
            },
            {
                option: "Must be able to live with kids.",
                descriptor: "noKids"
            },
            {
                option: "Must be able to live with dogs.",
                descriptor: "noDogs"
            },
            {
                option: "Must be able to live with other cats.",
                descriptor: "noCats"
            }
        ]

    },
    //personality questions; answers will be filtered through text parser
    {
        question: "How playful is your ideal cat?",
        id: 16,
        questionNo: 6,
        progress: "54.54%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very playful",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not playful at all",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How much physical affection does your ideal cat like (petting, lap-sitting, etc.)?",
        id: 17,
        questionNo: 7,
        progress: "63.63%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very affectionate",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not affectionate at all",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How social is your ideal cat?",
        id: 18,
        questionNo: 8,
        progress: "72.72%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very social",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not social at all",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How independent is your ideal cat?",
        id: 19,
        questionNo: 9,
        progress: "81.81%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very independent",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Very dependent",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How vocal is your ideal cat?",
        id: 20,
        questionNo: 10,
        progress: "90.9%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very vocal",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not vocal at all",
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "How cautious around strangers can your ideal cat be?",
        id: 21,
        questionNo: 11,
        progress: "100%",
        // indicator for displaying in handlebars
        selectOption: true,
        answers: [
            {
                option: "5 - Very cautious",
            },
            {
                option: "4",
            },
            {
                option: "3",
            },
            {
                option: "2",
            },
            {
                option: "1 - Not cautious at all",
            }
        ]
    },
];

module.exports = questionArray;