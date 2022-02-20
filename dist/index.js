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

exports.bisectionInsert = bisectionInsert;
exports.difference = difference;
exports.intersection = intersection;
exports.similarity = similarity;
exports.union = union;
