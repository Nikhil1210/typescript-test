/**
 * The function startStopwatch takes two arguments:
 *  - a callback function (callback)
 *  - a time interval (interval).
 *
 * It should call callback every interval milliseconds.
 *
 * The callback receives a counter parameter and should return true if the stopwatch should continue operating
 * or false if the stopwatch should stop operating.
 *
 * Interval milliseconds after the stopwatch is started, the callback should be called for the first time.
 *
 * The first time the callback is called, the counter should equal 1, the second time it should equal 2, and so on.
 *
 * The startStopwatch function should allow other code to be executed during the wait time,
 * and multiple stopwatches should be allowed to coexist.
 * 
 * The startStopwatch function should pass the tests found in test/spec/stopwatch.spec.jsx
 */
 export const stopwatch = (callback, interval) => {
    let counter = 0
    const myInterval = setInterval(() => {
        const val = callback(counter)
        if (!val) {
            clearInterval(myInterval)
        }
        counter++
    }, interval)
}
// export const stopwatch = (callback, interval) => {
//     let i = 1
//     let timer =  setInterval(x => {
//         i++
        
//         if(!callback(i)){
//             clearInterval(timer)
//         }
//     }, interval)
// }