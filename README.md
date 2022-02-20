# js-arrays-as-sets

## Why?

Existing ES Sets lack set operations like intersection & union and don't offer ideal performance when extending the `Set` to include those operations.

`arrset` is optimized to work on arrays or numbers/strings sorted in ascending order using the default sort (`[...].sort()`) for consistency.

## Usage

```sh
npm install --save beanmo/js-arrays-as-sets#main
```

```js
const { intersection, findIndex } = require('arrset');
```