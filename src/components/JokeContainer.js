const Jokes = require('../models/Joke')
const Status = require('../models/Status')
const JokeObject = require('./JokeObject')

module.exports = {

    oninit(vnode) {
        Jokes.load()
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