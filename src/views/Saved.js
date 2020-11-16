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
                <h1 class="pb-1 text-primary">Favorite jokes</h1>
                {Status.saved.length
                    ? Jokes.saved.length
                        ? (Jokes.saved.map((joke, index) => {
                            let properties = {...joke, ...Status.statusById(joke.id), leader: true, position: index}
                            return (<JokeObject {...properties}/>)
                        }))
                        : <h2>Loading...</h2>
                    : <h4>You have no favorite jokes, you can add some by clicking the <i class="far fa-heart" /> icon on a joke </h4>
                }
            </div>
        ) 
    }
}