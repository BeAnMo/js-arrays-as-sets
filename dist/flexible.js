'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @param {(a: any, b: any) => number} compare
 * @param {any[]} sm
 * @param {any[]} lg
 * @returns {any[]}
 */
function intersection(compare, sm, lg) {
  let i = 0;
  let j = 0;
  let results = [];

  while (sm[i] !== undefined && lg[j] !== undefined) {
    const cmp = compare(sm[i], lg[j]);

    if (cmp < 0) {
      i++;
    } else if (cmp > 0) {
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
 * @param {(a: any, b: any) => number} compare
 * @param {any[]} sm
 * @param {any[]} lg
 * @returns {any[]}
 */
function difference(compare, sm, lg) {
  let i = 0;
  let j = 0;
  let results = [];

  while (sm[i] !== undefined && lg[j] !== undefined) {
    const cmp = compare(sm[i], lg[j]);

    if (cmp < 0) {
      results.push(sm[i]);
      i++;
    } else if (cmp > 0) {
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
 * @param {(a: any, b: any) => number} compare
 * @param {(number | string)[]} sm
 * @param {(number | string)[]} lg
 * @returns {(number | string)[]}
 */
function union(compare, sm, lg) {
  let i = 0;
  let j = 0;
  let results = [];

  while (sm[i] !== undefined && lg[j] !== undefined) {
    const cmp = compare(sm[i], lg[j]);

    if (cmp < 0) {
      results.push(sm[i]);
      i++;
    } else if (cmp > 0) {
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
 * @param {(a: any, b: any) => number} compare
 * @param {any[]} sm
 * @param {any[]} lg
 * @returns {number}
 */
function similarity(compare, sm, lg) {
  let i = 0;
  let j = 0;
  let sumUnion = 0;
  let sumIntersection = 0;

  while (sm[i] !== undefined && lg[j] !== undefined) {
    const cmp = compare(sm[i], lg[j]);

    if (cmp < 0) {
      sumUnion++;
      i++;
    } else if (cmp > 0) {
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
 * @description Finds the index of based on COMPARE within ARR.
 * Returns -1 if COMPARE does not find a match in ARR.
 * @param {(a: any) => number} compare
 * @param {any[]} arr
 * @returns {number}
 */
function findIndex(compare, arr) {
  const cmp = compare(arr[0]);

  if (cmp < 0) {
    return -1;
  }

  if (cmp === 0) {
    return 0;
  }

  const len = arr.length;
  let min = 0;
  let max = len;
  let mid = Math.floor(max / 2);

  while (min < mid && mid < max) {
    const cmp = compare(arr[mid]);

    if (cmp < 0) {
      max = mid;
      mid = Math.ceil((min + max) / 2);
    } else if (cmp > 0) {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      return mid;
    }
  }

  return -1;
}

/**
 * @description Finds the possible index within ARR based on COMPARE.
 * Returns -1 if COMPARE finds a match in ARR.
 * @param {(a: any) => number} compare
 * @param {any[]} arr
 * @returns {number}
 */
function findPossibleIndex(compare, arr) {
  const cmp = compare(arr[0]);

  if (cmp < 0) {
    return 0;
  }

  if (cmp === 0) {
    return -1;
  }

  const len = arr.length;
  let min = 0;
  let max = len;
  let mid = Math.floor(max / 2);

  while (min < mid && mid < max) {
    const cmp = compare(arr[mid]);

    if (cmp < 0) {
      max = mid;
      mid = Math.ceil((min + max) / 2);
    } else if (cmp > 0) {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      return -1;
    }
  }

  return mid;
}

exports.difference = difference;
exports.findIndex = findIndex;
exports.findPossibleIndex = findPossibleIndex;
exports.intersection = intersection;
exports.similarity = similarity;
exports.union = union;
