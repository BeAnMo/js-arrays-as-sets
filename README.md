# js-arrays-as-sets

## Why?

Existing ES Sets lack set operations like intersection & union and don't offer ideal performance when extending the `Set` to include those operations.

Currently, it is assumed all arrays are sorted in ascending order.

## Usage

```sh
npm install --save beanmo/js-arrays-as-sets#main
```

### Optimized

Optimized algorithms offer a performance improvement but require arrays of uniform primitive data (strings or numbers). The expectation is that arrays are sorted with the default: `[...arr].sort()`. This is an 'incorrect' sort for strings but allows consistent comparison with `<` & `>`.

```js
const {
  intersection,
  findIndex,
  findPossibleIndex,
} = require('arrset/dist/optimized');

findIndex([1, 2, 3, 4, 5], 6); // -> -1
findPossibleIndex([1, 2, 3, 4, 5], 6); // -> 5

intersection([1, 3, 5, 6], [2, 3, 4, 6]); // -> [3, 6]
```

### Flexible

All algorithms take a comparator function, comparable to `Array.sort`, which expects a function that returns a number.

- If compare(a, b) < 0, then a < b.
- If compare(a, b) > 0, then a > b.

```js
const {
  intersection,
  findIndex,
  findPossibleIndex,
} = require('arrset/dist/flexible');

const compare = (m, n) => m - n;

findIndex(compare.bind(null, 6), [1, 2, 3, 4, 5]); // -> -1
findPossibleIndex(compare.bind(null, 6), [1, 2, 3, 4, 5]); // -> 5

intersection(compare, [1, 3, 5, 6], [2, 3, 4, 6]); // -> [3, 6]
```
