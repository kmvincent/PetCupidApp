// array of Qs, each one has Question and answers, and each answer has an icon
// for ranking importance of each Q, need to grab each Q then be able to place in the order you want...from there it assigns a value to each position....

// first four in keyWordArray are sometimes listed in the "options" sections of api response
dogKeyWordArray = ["noKids", "noCats", "specialNeeds", "housetrained", ""]


questionArray = [
    {
        // this will relate to pf filter
        question: "Are you looking for a cat or dog?",
        id: 1,
        progress: "9.09%",
        showing: true,
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
        progress: "18.18%",
        showing: false,
        answers: [
            {
                option: "No preference",
                icon: "placeholder.png",
            },
            {
                option: "Yes",
                icon: "placeholder.png",
                // Make dropdown of breeds they can choose
            }
        ]
    },
    {
        // this will relate to pf filter
        question: "What size dog would you prefer?",
        id: 3,
        progress: "27.27%",
        showing: false,
        answers: [
            {
                option: "No Preference",
                icon: "placeholder.png",
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
        progress: "36.36%",
        showing: false,
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
        question: "Enter your zip code.",
        id: 5,
        progress: "45.45%",
        showing: false,
        textBox: "12345",
        // need a way to add their zip to this...
        ajax: "&location="
    },
    {
        // this will relate to pf filter
        question: "Which sex would you prefer?",
        id: 6,
        progress: "54.54%",
        showing: false,
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
        id: 7,
        progress: "63.63%",
        showing: false,
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
        progress: "72.72%",
        showing: false,
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
        progress: "81.81%",
        showing: false,
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
        progress: "90.9%",
        showing: false,
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
        progress: "100%",
        showing: false,
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
]

module.exports = questionArray;