const JokeObject = require('../components/JokeObject')
const Jokes = require('../models/Joke')

module.exports = {
    oninit() {
        Jokes.loadSaved()
    },

    view() {
        return (
            <div class="container">
                {Jokes.saved.length
                    ? (Jokes.saved.map(joke => {
                        return [
                            <JokeObject {...joke}/>,
                            <br />
                        ]
                    }))
                    : <h1>Loading...</h1>
                }
            </div>
        )
    }
}