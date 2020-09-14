const Joke = require('../src/models/Joke')

const defaultData = [
    {
        type: "joke",
        setup: "Why did the chicken cross the road?",
        punchLine: "To get to the other side."
    },
    {
        type: "joke",
        setup: "Why did the computer science student cross the road?",
        punchLine: "100110110010101"
    }
]

describe('Joke tests', () => {
    it('load test with default data', () => {
        Joke.load()
        expect(Joke.jokeList).toEqual(defaultData)
        
    })
})