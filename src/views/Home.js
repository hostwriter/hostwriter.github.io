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
        Jokes.loadLeaders()
        Status.load()
    },

    view() {
        let likes = Jokes.leaders.likes
        let dislikes = Jokes.leaders.dislikes
        return (
            <div class="container-fluid p-5">
                <h1 class="text-primary mt-3 pb-3">Leaderboard</h1>
                <nav>
                    <div class="nav nav-pills" id="nav-type" role="tablist">
                        <a class="nav-item nav-link active" id="nav-likes-tab" data-toggle="tab" href="#nav-likes" role="tab" aria-controls="nav-likes" aria-selected="true">Most Liked</a>
                        <a class="nav-item nav-link" id="nav-dislikes-tab" data-toggle="tab" href="#nav-dislikes" role="tab" aria-controls="nav-dislikes" aria-selected="true">Most Disliked</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabTypeContent">
                <div class="tab-pane fade show active" id="nav-likes" role="tabpanel" aria-labelledby="nav-likes-tab">
                    <br />
                <nav>
                <div class="nav nav-pills" id="nav-tab-likes" role="tablist">
                    <a class="nav-item nav-link active" id="nav-yesterday-likes-tab" data-toggle="tab" href="#nav-yesterday-likes" role="tab" aria-controls="nav-yesterday" aria-selected="true">Yesterday</a>
                    <a class="nav-item nav-link" id="nav-lastweek-likes-tab" data-toggle="tab" href="#nav-lastweek-likes" role="tab" aria-controls="nav-lastweek" aria-selected="false">Last Week</a>
                    <a class="nav-item nav-link" id="nav-lastmonth-likes-tab" data-toggle="tab" href="#nav-lastmonth-likes" role="tab" aria-controls="nav-lastmonth" aria-selected="false">Last Month</a>
                    <a class="nav-item nav-link" id="nav-alltime-likes-tab" data-toggle="tab" href="#nav-alltime-likes" role="tab" aria-controls="nav-alltime" aria-selected="false">All Time</a>
                </div>
                <br />
                </nav>
                <div class="tab-content" id="nav-tabContent-likes">
                <div class="tab-pane fade show active" id="nav-yesterday-likes" role="tabpanel" aria-labelledby="nav-yesterday-tab">
                    {jokeBuilder(likes, "yesterday")}
                </div>
                <div class="tab-pane fade" id="nav-lastweek-likes" role="tabpanel" aria-labelledby="nav-lastweek-tab">
                    {jokeBuilder(likes, "lastWeek")}
                </div>
                <div class="tab-pane fade" id="nav-lastmonth-likes" role="tabpanel" aria-labelledby="nav-lastmonth-tab">
                    {jokeBuilder(likes, "lastMonth")}
                </div>
                <div class="tab-pane fade" id="nav-alltime-likes" role="tabpanel" aria-labelledby="nav-alltime-tab">
                    {jokeBuilder(likes, "allTime")}   
                </div>
            </div>
                </div>
                <div class="tab-pane fade show" id="nav-dislikes" role="tabpanel" aria-labelledby="nav-dislikes-tab">
                <br />
                <nav>
                <div class="nav nav-pills" id="nav-tab-dislikes" role="tablist">
                    <a class="nav-item nav-link active" id="nav-yesterday-dislikes-tab" data-toggle="tab" href="#nav-yesterday-dislikes" role="tab" aria-controls="nav-yesterday-dislikes" aria-selected="true">Yesterday</a>
                    <a class="nav-item nav-link" id="nav-lastweek-dislikes-tab" data-toggle="tab" href="#nav-lastweek-dislikes" role="tab" aria-controls="nav-lastweek-dislikes" aria-selected="false">Last Week</a>
                    <a class="nav-item nav-link" id="nav-lastmonth-dislikes-tab" data-toggle="tab" href="#nav-lastmonth-dislikes" role="tab" aria-controls="nav-lastmonth-dislikes" aria-selected="false">Last Month</a>
                    <a class="nav-item nav-link" id="nav-alltime-dislikes-tab" data-toggle="tab" href="#nav-alltime-dislikes" role="tab" aria-controls="nav-alltime-dislikes" aria-selected="false">All Time</a>
                </div>
                </nav>
                <br />
                <div class="tab-content" id="nav-tabContent-dislikes">
                <div class="tab-pane fade show active" id="nav-yesterday-dislikes" role="tabpanel" aria-labelledby="nav-yesterday-dislikes-tab">
                    {jokeBuilder(dislikes, "yesterday")}
                </div>
                <div class="tab-pane fade" id="nav-lastweek-dislikes" role="tabpanel" aria-labelledby="nav-lastweek-dislikes-tab">
                    {jokeBuilder(dislikes, "lastWeek")}
                </div>
                <div class="tab-pane fade" id="nav-lastmonth-dislikes" role="tabpanel" aria-labelledby="nav-lastmonth-dislikes-tab">
                    {jokeBuilder(dislikes, "lastMonth")}
                </div>
                <div class="tab-pane fade" id="nav-alltime-dislikes" role="tabpanel" aria-labelledby="nav-alltime-dislikes-tab">
                    {jokeBuilder(dislikes, "allTime")}
                </div>
            </div>
                </div>
                </div>
            </div>
        )
    }
}