// array of Qs, each one has Question and answers, and each answer has an icon
// for ranking importance of each Q, need to grab each Q then be able to place in the order you want...from there is assigns a value to each position....
// first four are often listed in the "options" sections of api response
dogKeyWordArray = ["noKids", "noCats", "specialNeeds", "housetrained", ""]


questionArray = [
    {
        // this will relate to pf filter
        question: "Are you looking for a cat or dog?",
        id: 1,
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
        question: "What size dog would you prefer?",
        id: 3,
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
        question: "Which sex would you prefer?",
        id: 4,
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
        question: "Enter your zip code.",
        id: 5,
        textBox: "12345",
        // need a way to add their zip to this...
        ajax: "&location="
    },
]

module.exports = dogQuestionArray;