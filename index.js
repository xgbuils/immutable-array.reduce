module.exports = function (reducer, acc, immutableArray) {
    const {array, length} = immutableArray
    for (let index = 0; index < length; ++index) {
        acc = reducer(acc, array[index])
    }
    return acc
}
