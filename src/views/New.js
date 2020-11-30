var JokeContainer = require('../components/JokeContainer')
var Joke = require('../models/Joke')

module.exports = {

    view() {
        return (
            <div class={"container-fluid p-5"}>
                <h1 class="pb-1 text-primary">New jokes</h1>
                <JokeContainer />
            </div>
        )
    }
}