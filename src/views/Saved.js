const JokeObject = require('../components/JokeObject')
const Jokes = require('../models/Joke')

module.exports = {
    oninit() {
        Jokes.loadSaved()
    },

    view() {
        return (
            <div class="container-fluid p-5">
                <h1 class="pb-1 text-primary">Saved jokes</h1>
                {Jokes.saved.length
                    ? (Jokes.saved.map(joke => {
                        return [
                            <JokeObject {...joke}/>
                        ]
                    }))
                    : <h1>Loading...</h1>
                }
            </div>
        )
    }
}