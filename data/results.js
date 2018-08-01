resultsArray = [
    {
        //============What we need from ajax===============
        // photo
        // name
        // petID
        // url
        // about

        // this will relate to pf filter
        test1: "Are you looking for a cat or dog?",
        id: 1,
        test2: 1,
        progress: "9.09%",
        link: [
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
    }
]

module.exports = resultsArray;