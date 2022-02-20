/**
 * @param {(number | string)[]} sm 
 * @param {(number | string)[]} lg 
 * @returns {number}
 */
export function similarity(sm, lg) {
  let i = 0;
  let j = 0;
  let sumUnion = 0;
  let sumIntersection = 0;

  while (sm[i] !== undefined && lg[j] !== undefined) {
    if (sm[i] < lg[j]) {
      sumUnion++;
      i++;
    } else if (sm[i] > lg[j]) {
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
