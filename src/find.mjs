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


