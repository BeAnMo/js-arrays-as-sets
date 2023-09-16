/**
 * @param {(a: any, b: any) => number} compare
 * @param {any[]} sm
 * @param {any[]} lg
 * @returns {any[]}
 */
exports.intersection = function intersection(compare, sm, lg) {
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
