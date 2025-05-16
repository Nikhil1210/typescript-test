import assert from 'assert'
import { stopwatch } from './stopwatch'
const check = (done, f) => {
    try {
        f()
        done()
    } catch (err) {
        done(err)
    }
}
describe('stopwatch', () => {
    it('should stop after n interations', done => {
        var i = 0
        const cb = c => {
            i = c
            return i < 5
        }
        stopwatch(cb, 10)
        setTimeout(
            () => check(done, () => {

                assert.equal(i, 5)
            }),
            100
        )
    })
    it('should take (roughly) the specified time', done => {
        var i = 0
        const cb = c => {
            i = c
            return i < 2
        }
        stopwatch(cb, 10)
        setTimeout(
            () => check(done, () => {
                assert.equal(i, 2)
            }),
            30
        )
    })
    it('should run in parallel', done => {
        var i1 = 0
        var i2 = 0
        const cb1 = c => {
            i1 = c
            return i1 < 5
        }
        const cb2 = c => {
            i2 = c
            return i2 < 5
        }
        stopwatch(cb1, 10)
        stopwatch(cb2, 10)
        setTimeout(
            () => check(done, () => {

                assert.equal(i1, 5)
            }),
            100
        )
    })
})