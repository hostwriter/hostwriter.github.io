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
                    ? (Jokes.list.map(joke => {
                        let properties = {...joke, ...Status.statusById(joke.id)}
                        return (<JokeObject {...properties}/>)
                    }))
                    : <h1>Loading...</h1>
                }
            </div>
        )
    }
}