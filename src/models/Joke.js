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
    save: (id, saved) => {
        console.log("Save! id:", id)
        if (saved) {
            Status.remove(id, 'saved')
        } else {
            Status.add(id, 'saved')
        }
    },

    like: (id, liked) => {
        console.log("Like! id:", id)
        let index = Joke.list.findIndex(v => v.id == id)
        if (liked) {
            // TODO - uncomment this when the API supports un-liking
            // console.log(`decrementing like of id: ${id}`)
            // Status.remove(id, 'like')
            // Joke.list[index].likes -= 1
        } else {
            console.log(`incrementing like of id: ${id}`)
            Status.add(id, 'like')
            Joke.list[index].likes += 1
        }
    },

    dislike: (id, disliked) => {
        console.log("Dislike! id:", id)
        let index = Joke.list.findIndex(v => v.id == id)
        if (disliked) {
            // TODO - uncomment this when the API supports un-disliking
            // console.log(`decrementing dislike of id: ${id}`)
            // Status.remove(id, 'dislike')
            // Joke.list[index].dislikes -= 1
        } else {
            console.log(`incrementing dislike of id: ${id}`)
            Status.add(id, 'dislike')
            Joke.list[index].dislikes += 1
        }
    },

}

module.exports = Joke
