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
        })
        .then( (result) => Joke.list = result )
    },

    loadSaved: () => {
        const list = JSON.parse(localStorage.getItem('saved'))
        return m.request({
            method: "POST",
            url: url + "/getBatch",
            body: list,
        })
        .then( (result) => Joke.saved = result )
        
    },

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
            Status.remove(id, 'like')
            Joke.list[index].likes = (Joke.list[index].likes || 0) - 1
        } else {
            Status.add(id, 'like')
            Joke.list[index].likes = (Joke.list[index].likes || 0) + 1
        }
    },

    dislike: (id, disliked) => {
        let index = Joke.list.findIndex(v => v.id == id)
        if (disliked) {
            Status.remove(id, 'dislike')
            Joke.list[index].dislikes = (Joke.list[index].dislikes || 0) - 1
        } else {
            Status.add(id, 'dislike')
            Joke.list[index].dislikes = (Joke.list[index].dislikes || 0) + 1
        }
    },

}

module.exports = Joke
