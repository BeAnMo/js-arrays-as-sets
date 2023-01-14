'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function bisectionInsert(arr, item) {
  if (item < arr[0]) {
    arr.unshift(item);
    return arr;
  }

  const len = arr.length;
  let min = 0;
  let max = len;
  let mid = Math.floor(max / 2);

  while (min < mid && mid < max) {
    if (item < arr[mid]) {
      max = mid;
      mid = Math.ceil((min + max) / 2);
    } else if(item > arr[mid]) {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      return arr;
    }
  }

  arr.splice(mid, 0, item);
  return arr;
}

/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {(number | string)[]}
 */
function intersection(sm, lg) {
  let i = 0;
  let j = 0;
  let results = [];

  while (sm[i] !== undefined && lg[j] !== undefined) {
    if (sm[i] < lg[j]) {
      i++;
    } else if (sm[i] > lg[j]) {
      j++;
    } else {
      results.push(sm[i]);
      i++;
      j++;
    }
  }

  return results;
}

/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {(number | string)[]}
 */
function difference(sm, lg) {
  let i = 0;
  let j = 0;
  let results = [];

  while (sm[i] !== undefined && lg[j] !== undefined) {
    if (sm[i] < lg[j]) {
      results.push(sm[i]);
      i++;
    } else if (sm[i] > lg[j]) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  while (sm[i] !== undefined) {
    results.push(sm[i]);
    i++;
  }

  return results;
}

/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {(number | string)[]}
 */
function union(sm, lg) {
  let i = 0;
  let j = 0;
  let results = [];

  while (sm[i] !== undefined && lg[j] !== undefined) {
    if (sm[i] < lg[j]) {
      results.push(sm[i]);
      i++;
    } else if (sm[i] > lg[j]) {
      results.push(lg[j]);
      j++;
    } else {
      results.push(sm[i]);
      i++;
      j++;
    }
  }

  while (sm[i] !== undefined) {
    results.push(sm[i]);
    i++;
  }

  while (lg[j] !== undefined) {
    results.push(lg[j]);
    j++;
  }

  return results;
}

/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {number}
 */
function similarity(sm, lg) {
  let i = 0;
  let j = 0;
  let sumUnion = 0;
  let sumIntersection = 0;

  while (sm[i] !== undefined && lg[j] !== undefined) {
    if (sm[i] < lg[j]) {
      sumUnion++;
      i++;
    } else if (sm[i] > lg[j]) {
      sumUnion++;
      j++;
    } else {
      sumUnion++;
      sumIntersection++;
      i++;
      j++;
    }
  }

  while (sm[i] !== undefined) {
    sumUnion++;
    i++;
  }

  while (lg[j] !== undefined) {
    sumUnion++;
    j++;
  }

  return sumIntersection / sumUnion;
}

/**
 * @description Finds the index of ITEM within ARR.
 * Returns -1 if ARR does not contain ITEM.
 * @param {(number | string)[]} arr 
 * @param {number | string} item 
 * @returns {number}
 */
function findIndex(arr, item) {
  if (item < arr[0]) {
    return -1;
  }

  // This can be true -1 < -1 ???
  if (item === arr[0]) {
    return 0;
  }

  const len = arr.length;
  let min = 0;
  let max = len;
  let mid = Math.floor(max / 2);

  while (min < mid && mid < max) {
    if (item < arr[mid]) {
      max = mid;
      mid = Math.ceil((min + max) / 2);
    } else if (item > arr[mid]) {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      return mid;
    }
  }

  return -1;
}

/**
 * @description Finds the possible index of ITEM within ARR.
 * Returns -1 if ARR contains ITEM.
 * @param {(number | string)[]} arr 
 * @param {number | string} item 
 * @returns {number}
 */
function findPossibleIndex(arr, item) {
  if (item < arr[0]) {
    return 0;
  }

  // This can be true -1 < -1 ???
  if (item === arr[0]) {
    return -1;
  }

  const len = arr.length;
  let min = 0;
  let max = len;
  let mid = Math.floor(max / 2);

  while (min < mid && mid < max) {
    if (item < arr[mid]) {
      max = mid;
      mid = Math.ceil((min + max) / 2);
    } else if (item > arr[mid]) {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      return -1;
    }
  }

  return mid;
}

exports.bisectionInsert = bisectionInsert;
exports.difference = difference;
exports.findIndex = findIndex;
exports.findPossibleIndex = findPossibleIndex;
exports.intersection = intersection;
exports.similarity = similarity;
exports.union = union;
