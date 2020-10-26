const JokeObject = require('../components/JokeObject')
const Status = require('../models/Status')
const Jokes = require('../models/Joke')

module.exports = {
    oninit() {
        Jokes.loadSaved()
        Status.load()
    },

    view() {
        return (
            <div class="container-fluid p-5">
                <h1 class="pb-1 text-primary">Saved jokes</h1>
                {Jokes.saved.length
                    ? (Jokes.saved.map(joke => {
                        let properties = {...joke, ...Status.statusById(joke.id)}
                        return (<JokeObject {...properties}/>)
                    }))
                    : <h1>Loading...</h1>
                }
            </div>
        ) 
    }
}