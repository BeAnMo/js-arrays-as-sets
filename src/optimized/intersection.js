/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {(number | string)[]}
 */
exports.intersection = function intersection(sm, lg) {
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