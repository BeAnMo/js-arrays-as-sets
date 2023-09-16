/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {(number | string)[]}
 */
exports.difference = function difference(sm, lg) {
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