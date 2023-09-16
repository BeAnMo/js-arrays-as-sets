/**
 * @param {(a: any, b: any) => number} compare
 * @param {any[]} sm
 * @param {any[]} lg
 * @returns {number}
 */
exports.similarity = function similarity(compare, sm, lg) {
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
