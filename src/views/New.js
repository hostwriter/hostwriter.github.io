var JokeContainer = require('../components/JokeContainer')
var Joke = require('../models/Joke')

module.exports = {

    view() {
        return (
            <div class={"container pt-5"}>
                <JokeContainer />
            </div>
        )
    }
}