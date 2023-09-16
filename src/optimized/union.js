/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {(number | string)[]}
 */
exports.union = function union(sm, lg) {
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
