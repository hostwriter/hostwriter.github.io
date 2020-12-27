const Jokes = require('../models/Joke')
const Status = require('../models/Status')
const JokeObject = require('./JokeObject')
const moment = require('moment')

module.exports = {

    oninit(vnode) {
        Jokes.load(vnode.attrs.date && moment(vnode.attrs.date).format('YYYY-MM-DD') || null)
        Status.load()
    },

    view(vnode) {
        return(
            <div>
                {Jokes.list.length 
                    ? (Jokes.list.map((joke, index) => {
                        let properties = {...joke, ...Status.statusById(joke.id), leader: false, position: index % 4}
                        return [<JokeObject {...properties}/>, <br />]
                    }))
                    : <h1>Loading...</h1>
                }
            </div>
        )
    }
}