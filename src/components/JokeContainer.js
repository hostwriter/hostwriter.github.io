const Jokes = require('../models/Joke')
const JokeObject = require('./JokeObject')

module.exports = {

    oninit(vnode) {
        Jokes.load()
    },

    view(vnode) {
        return(
            <div>
                {Jokes.list.length 
                    ? (Jokes.list.map(joke => {
                        return (<JokeObject {...joke}/>)
                    }))
                    : <h1>Loading...</h1>
                }
            </div>
        )
    }
}