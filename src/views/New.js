var JokeContainer = require('../components/JokeContainer')
var Joke = require('../models/Joke')
const DatePicker = require('mithril-datepicker')
const moment = require('moment')

module.exports = {

    oninit() {
        this.date = Date()
    },

    view() {
        return (
            <div>
                <span id={"date-picker"}>
                    <DatePicker 
                        onchange={d => Joke.load(moment(d).format('YYYY-MM-DD'))}
                    />
                </span>
                <div class={"container-fluid p-5"}>
                    <h1 class="pb-1 text-primary">New jokes</h1>
                    <JokeContainer 
                        date={this.date}
                    />
                </div>
            </div>
        )
    }
}