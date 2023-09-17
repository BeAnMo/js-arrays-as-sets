/**
 * @description Finds the index of based on COMPARE within ARR.
 * Returns -1 if COMPARE does not find a match in ARR.
 * @param {(a: any) => number} compare
 * @param {any[]} arr
 * @returns {number}
 */
exports.findIndex = function findIndex(compare, arr) {
  const len = arr.length;

  if(len === 0){
    return -1;
  }

  const cmp = compare(arr[0]);

  if (cmp < 0) {
    return -1;
  }

  if (cmp === 0) {
    return 0;
  }

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
exports.findPossibleIndex = function findPossibleIndex(compare, arr) {
  const len = arr.length;

  if(len === 0){
    return 0;
  }

  const cmp = compare(arr[0]);
  
  if (cmp < 0) {
    return 0;
  }

  if (cmp === 0) {
    return -1;
  }

  if(len === 1){
    return 1;
  }

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
