
const defaultData = [
    {
        id: 1,
        type: "joke",
        views: 35,
        likes: 25,
        dislikes: 2,
        setup: "Why did the chicken cross the road?",
        punchLine: "To get to the other side."
    },
    {
        id: 2,
        type: "joke",
        views: 15,
        likes: 5,
        dislikes: 2,
        setup: "Why did the computer cross the road?",
        punchLine: "100110110010101"
    }
]

module.exports = {

    // Load the list of jokes from the API
    load: () => {

        // TODO - implement API connection
        // just give the stub data for now
        module.exports.jokeList = defaultData
    },

    // Save a joke
    save: (id) => {

    },

    // Like a joke
    like: (id) => {

    },

    // Dislike a joke
    dislike: (id) => {

    }

}
