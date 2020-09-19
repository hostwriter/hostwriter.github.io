
const Jokes = require('../models/Joke')
const JokeObject = require('./JokeObject')

module.exports = {

    oninit() {
        Jokes.load()
    },

    view() {
        const list = Jokes.jokeList || []

        return(
            <div>
                {list.map(joke => {
                    return [
                        <JokeObject {...joke}/>,
                        <br />
                    ]
                })}
            </div>
        )
    }
}