const Joke = require('../src/models/Joke')
const Status = require('../src/models/Status')
const m = require('mithril')

describe('Joke tests', () => {

    let mSpy;
    beforeEach(() => {
        mSpy = jest.spyOn(m, 'request')
    })

    afterEach(() => {
        mSpy.mockRestore()
    })

    it('loads jokes into list', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        expect(Joke.list).toEqual([{id: "1", someField: "some value"}])

    })

    it('loads saved', async() => {
        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.loadSaved()
        expect(Joke.saved).toEqual([{id: "1", someField: "some value"} ])
    })

    it('likes a joke', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        Joke.like(1, false)

    })

    it('dislikes a joke', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        Joke.dislike(1, false)

    })

    it('un-likes a joke', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        Joke.like(1, true)

    })

    it('un-dislikes a joke', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        Joke.dislike(1, true)

    })

    it('saves a joke', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        Joke.save(1, false)

    })

    it('un-saves a joke', async() => {

        mSpy.mockResolvedValue([{id: "1", someField: "some value"}]);

        await Joke.load()

        Joke.save(1, true)

    })

})