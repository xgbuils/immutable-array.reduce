const test = require('tape')
const tapSpec = require('tap-spec')

const arrayOf = require('immutable-array.of')
const push = require('immutable-array.push')
const reduce = require('./')
const add = (a, b) => a + b

const array = Object.freeze([1, 2, 3, 4, 5])

test('.reduce', function (t) {
    t.test('reduce empty immutable array', function (st) {
        const list = arrayOf([])
        const result = reduce(add, 0, list)
        st.equal(result, 0, 'it returns the initial value')
        st.end()
    })
    t.test('reduce non empty immutable array', function (st) {
        const list = arrayOf(array)
        const result = reduce(add, 0, list)
        st.equal(result, array.reduce(add, 0), 'it behaves like array#reduce method')
        st.end()
    })
    t.test('reduce empty immutable array with list.array.length != 0', function (st) {
        const list = arrayOf([])
        push(2, push(1, list))
        const result = reduce(add, 0, list)
        st.equal(result, 0, 'it behaves considering list.length property')
        st.end()
    })
    t.test('reduce non empty immutable array with list.array.length != list.length', function (st) {
        const list = arrayOf(array)
        push(2, push(1, list))
        const result = reduce(add, 0, list)
        st.equal(result, array.reduce(add, 0), 'it behaves considering list.length property')
        st.end()
    })

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
