const m = require('mithril')
const moment = require('moment')
const Status = require('./Status')
const config = require('../config')

const url = config.url()

let Joke = {

    list: [],
    saved: [],
    leaders: {
        likes: {
            yesterday: [],
            lastWeek: [],
            lastMonth: [],
            allTime: []
        },
        dislikes: {
            yesterday: [],
            lastWeek: [],
            lastMonth: [],
            allTime: []
        },
    },

    // Load the list of jokes from the API
    load: (date) => {
        return m.request({
            method: "GET",
            url: url,
            params: {
                date: (date || moment().format('YYYY-MM-DD'))
            }
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

    loadLeaders: () => {
        return m.request({
            method: "GET",
            url: url + "/leaderboard",
        })
        .then( (result) => Joke.leaders = result)
    },

    save: (id, saved) => {
        if (saved) {
            Status.remove(id, 'saved')
            Joke.loadSaved()
        } else {
            Status.add(id, 'saved')
        }
    },

    like: (id, liked, leader) => {
        if (liked) {
            if (!leader) {
                let index = Joke.list.findIndex(v => v.id == id)
                Joke.list[index].likes = (Joke.list[index].likes || 0) - 1
            }
            Status.remove(id, 'like')
        } else {
            if (!leader) {
                let index = Joke.list.findIndex(v => v.id == id)
                Joke.list[index].likes = (Joke.list[index].likes || 0) + 1
            }
            Status.add(id, 'like')
        }
    },

    dislike: (id, disliked, leader) => {
        if (disliked) {
            if (!leader) {
                let index = Joke.list.findIndex(v => v.id == id)
                Joke.list[index].dislikes = (Joke.list[index].dislikes || 0) - 1
            }
            Status.remove(id, 'dislike')
        } else {
            if (!leader) {
                let index = Joke.list.findIndex(v => v.id == id)
                Joke.list[index].dislikes = (Joke.list[index].dislikes || 0) + 1
            }
            Status.add(id, 'dislike')
        }
    },

}

module.exports = Joke
