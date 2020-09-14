const Joke = require('../src/models/Joke')

const defaultData = [
    {
        id: 1,
        type: "joke",
        views: 35,
        likes: 25,
        dislikes: 2,
        setup: "Why did the chicken cross the road?",
        punchLine: "To get to the other side."
    },
    {
        id: 2,
        type: "joke",
        views: 15,
        likes: 5,
        dislikes: 2,
        setup: "Why did the computer cross the road?",
        punchLine: "100110110010101"
    }
]

describe('Joke tests', () => {
    it('load test with default data', () => {
        Joke.load()
        expect(Joke.jokeList).toEqual(defaultData)
        
    })
})