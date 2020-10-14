const Joke = require('./Joke')
const url = require('../config').url()

const actions = [
    'like',
    'dislike',
    'saved'
]

let Status = {

    like: [],
    dislike: [],
    saved: [],

    load: () => {
        actions.forEach(action => {
            Status[action] = JSON.parse(localStorage.getItem(action)) || []
        })
    },

    add: (id, action) => {
        Status.load()
        console.log(Status)
        if (Status[action].indexOf(id) !== -1) {
           return
        }
        Status[action].push(id)
        Status.save()

        if (status !== 'saved') {
            return m.request({
                method: "PUT",
                url: `${url}/${id}/${action}`,
            })
            .then(function(result) {
                console.log(`${action} response: ${result}`)
            })
        }
    },

    save: () => {
        actions.forEach(action => {
            localStorage.setItem(action, JSON.stringify(Status[action])) || []
        })
    },

    isLiked: (id) => {
        return Status.like.indexOf(id) !== -1
    },

    isDisliked: (id) => {
        return Status.dislike.indexOf(id) !== -1
    },

    isSaved: (id) => {
        return Status.saved.indexOf(id) !== -1
    },

    statusById: (id) => {
        return {
            liked: Status.isLiked(id),
            disliked: Status.isDisliked(id),
            saved: Status.isSaved(id),
        }
    }
}

module.exports = Status