const Joke = require('../src/models/Joke')
const Status = require('../src/models/Status')
const m = require('mithril')

describe('Status tests', () => {

    let requestSpy;

    beforeEach(() => {
        requestSpy = jest.spyOn(m, 'request')

        localStorage.setItem('like', `[1,2,3]`)
        localStorage.setItem('dislike', `[4,5,6]`)
        localStorage.setItem('saved', `[7,8,9]`)

    })

    afterEach(() => {
        requestSpy.mockRestore()
    })

    it('loads like status', () => {

        Status.load()

        expect(Status.like).toEqual([1,2,3])

    })

    it('loads dislike status', () => {

        Status.load()

        expect(Status.dislike).toEqual([4,5,6])

    })

    it('loads saved status', () => {

        Status.load()

        expect(Status.saved).toEqual([7,8,9])

    })

    it('adds a save', async() => {
        Status.add(1, 'saved')
    })

    it('removes a save', () => {
        Status.remove(1, 'saved')
    })

    it('adds a like', async() => {
        requestSpy.mockResolvedValue({})
        Status.add(1, 'like')
    })

    it('removes a like', async() => {
        requestSpy.mockResolvedValue({})
        Status.remove(1, 'like')
    })

    it('gets status by id', () => {
        Status.statusById(1)
    })

    it('tests empty local storage', () => {
        localStorage.setItem('saved', [])
    })

})