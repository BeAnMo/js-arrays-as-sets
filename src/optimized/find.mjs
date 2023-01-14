/**
 * @description Finds the index of ITEM within ARR.
 * Returns -1 if ARR does not contain ITEM.
 * @param {(number | string)[]} arr 
 * @param {number | string} item 
 * @returns {number}
 */
export function findIndex(arr, item) {
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
export function findPossibleIndex(arr, item) {
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


