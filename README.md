# immutable-array.reduce

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`immutable-array.reduce` returns a value by applying iterator function over accumulator and each element of immutable. The accumulator starts with the `initialValue`

## Install

``` bash
$ npm install immutable-array.reduce --save
```

## Usage
``` javascript
const ImmutableArray = {
    of: require('immutable-array.of'),
    reduce: require('immutable-array.reduce')
}

const a = ImmutableArray.of([1, 2, 3, 4, 5]) // {array: [1, 2, 3, 4, 5], length: 5}
const b = ImmutableArray.reduce((a, b) => a + b, 0) // 15
```

## Other related libraries
- [immutable-array.of]()
- [immutable-array.push]()
- [immutable-array.every]()
- [immutable-array.findIndexFrom]()

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/immutable-array.reduce.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/immutable-array.reduce
  [3]: https://badge.fury.io/js/immutable-array.reduce.svg
  [4]: https://badge.fury.io/js/immutable-array.reduce
  [5]: https://coveralls.io/repos/github/xgbuils/immutable-array.reduce/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/immutable-array.reduce?branch=master
  [7]: https://david-dm.org/xgbuils/immutable-array.reduce.svg
  [8]: https://david-dm.org/xgbuils/immutable-array.reduce
