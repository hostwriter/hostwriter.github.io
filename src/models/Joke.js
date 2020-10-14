const m = require('mithril')
const Likes = require('./Likes')
const config = require('../config')

const url = config.url()

let Joke = {

    list: [],
    saved: [],

    // Load the list of jokes from the API
    load: () => {
        return m.request({
            method: "GET",
            url: url,
            //withCredentials: true,
        })
        .then(function(result) {
            console.log("got some jokes", result)
            Joke.list = result
        })
    },

    loadSaved: () => {
        // saved jokes
        // TODO
        // Get ID's from local storage
        // request from API

        // just return stubbed data for now
        Joke.saved = [
            {
                id: "1234-abcd",
                content: "saved joke number 1"
            },
            {
                id: "1235-abcd",
                content: "saved joke number 2"
            },
        ]
        console.log(Joke.saved)
    },

    // Save a joke
    save: (id) => {
        console.log("Save! id:", id)

    },

    // Like a joke
    like: (id) => {
        console.log("Like! id:", id)
        Likes.add(id, 'like')
    },

    // Dislike a joke
    dislike: (id) => {
        console.log("Dislike! id:", id)
        Likes.add(id, 'dislike')
    }

}

module.exports = Joke
