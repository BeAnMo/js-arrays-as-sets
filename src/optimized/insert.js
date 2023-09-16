
exports.bisectionInsert = function bisectionInsert(arr, item) {
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
    } else if (item > arr[mid]) {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      return arr;
    }
  }

  arr.splice(mid, 0, item);
  return arr;
}



