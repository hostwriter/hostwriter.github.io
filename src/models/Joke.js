const m = require('mithril')
const Status = require('./Status')
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
    },

    // Save a joke
    save: (id, saved) => {
        if (saved) {
            Status.remove(id, 'saved')
        } else {
            Status.add(id, 'saved')
        }
    },

    like: (id, liked) => {
        let index = Joke.list.findIndex(v => v.id == id)
        if (liked) {
            // TODO - uncomment this when the API supports un-liking
            // Status.remove(id, 'like')
            // Joke.list[index].likes = (Joke.list[index].likes || 0) - 1
        } else {
            Status.add(id, 'like')
            Joke.list[index].likes = (Joke.list[index].likes || 0) + 1
        }
    },

    dislike: (id, disliked) => {
        let index = Joke.list.findIndex(v => v.id == id)
        if (disliked) {
            // TODO - uncomment this when the API supports un-disliking
            // Status.remove(id, 'dislike')
            // Joke.list[index].dislikes = (Joke.list[index].dislikes || 0) - 1
        } else {
            Status.add(id, 'dislike')
            Joke.list[index].dislikes = (Joke.list[index].dislikes || 0) + 1
        }
    },

}

module.exports = Joke
