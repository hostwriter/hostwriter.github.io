const Joke = require('./Joke')
const url = require('../config').url()

let Status = {

    like: [],
    dislike: [],

    load: () => {
        Status.like = localStorage.getItem('like') || []
        Status.dislike = localStorage.getItem('dislike') || []
    },

    add: (id, action) => {
        Status.load()
        if (Status[action].indexOf(id) !== -1) {
            return
        }
        Status[action].push(id)
        Status.save()

        return m.request({
            method: "PUT",
            url: `${url}/${id}/${action}`,
        })
        .then(function(result) {
            console.log(`${action} response: ${result}`)
        })
    },

    save: () => {
        localStorage.setItem('like', Status.like)
        localStorage.setItem('dislike', Status.dislike)
    }

}

module.exports = Status