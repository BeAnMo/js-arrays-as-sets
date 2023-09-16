/**
 * @param {(a: any, b: any) => number} compare
 * @param {(number | string)[]} sm
 * @param {(number | string)[]} lg
 * @returns {(number | string)[]}
 */
exports.union = function union(compare, sm, lg) {
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
