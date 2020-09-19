
var JokeContainer = require('../components/JokeContainer')

module.exports = {

    view() {
        return (
            <div class={"home"}>
                <h1 style={"text-align: center"}>Jokes of the day</h1>
                <div class={"container"}>
                    <JokeContainer />
                </div>
            </div>
        )
    }
}
