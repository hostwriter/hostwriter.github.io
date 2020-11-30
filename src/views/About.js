const JokeObject = require('../components/JokeObject')
const Status = require('../models/Status')
const Jokes = require('../models/Joke')

const jokeBuilder = function(type, date) {
    return type[date].length
    ? type[date].map((joke, index) => {
        let properties = {...joke, ...Status.statusById(joke.id), leader: true, position: index}
        return [<JokeObject {...properties}/>, <br />]
    })
    : null
}

module.exports = {
    oninit() {
    },

    view() {
        return (
            <div class="container-fluid p-5">
                <h1 class="text-primary mt-3 pb-3">About GPT Comedy</h1>
                <p>
                    Jokes written by a machine learning algorithm
                </p>
                <p>
                    The team:
                </p>

                <ul>
                    <li>Sasha</li>
                    <li>Bobby</li>
                    <li>Remy</li>
                    <li>Simon</li>
                    <li>Jesus</li>
                </ul>
            </div>
        )
    }
}