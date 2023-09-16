(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.arrset = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var intersection$1 = {};

	/**
	 * @param {(a: any, b: any) => number} compare
	 * @param {any[]} sm
	 * @param {any[]} lg
	 * @returns {any[]}
	 */

	intersection$1.intersection = function intersection(compare, sm, lg) {
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
	};

	var difference$1 = {};

	/**
	 * @param {(a: any, b: any) => number} compare
	 * @param {any[]} sm
	 * @param {any[]} lg
	 * @returns {any[]}
	 */

	difference$1.difference = function difference(compare, sm, lg) {
	  let i = 0;
	  let j = 0;
	  let results = [];

	  while (sm[i] !== undefined && lg[j] !== undefined) {
	    const cmp = compare(sm[i], lg[j]);

	    if (cmp < 0) {
	      results.push(sm[i]);
	      i++;
	    } else if (cmp > 0) {
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
	};

	var union$1 = {};

	/**
	 * @param {(a: any, b: any) => number} compare
	 * @param {(number | string)[]} sm
	 * @param {(number | string)[]} lg
	 * @returns {(number | string)[]}
	 */

	union$1.union = function union(compare, sm, lg) {
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
	};

	var similarity$1 = {};

	/**
	 * @param {(a: any, b: any) => number} compare
	 * @param {any[]} sm
	 * @param {any[]} lg
	 * @returns {number}
	 */

	similarity$1.similarity = function similarity(compare, sm, lg) {
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
	};

	var find = {};

	/**
	 * @description Finds the index of based on COMPARE within ARR.
	 * Returns -1 if COMPARE does not find a match in ARR.
	 * @param {(a: any) => number} compare
	 * @param {any[]} arr
	 * @returns {number}
	 */

	find.findIndex = function findIndex(compare, arr) {
	  const len = arr.length;

	  if(len === 0){
	    return -1;
	  }

	  const cmp = compare(arr[0]);

	  if (cmp < 0) {
	    return -1;
	  }

	  if (cmp === 0) {
	    return 0;
	  }

	  let min = 0;
	  let max = len;
	  let mid = Math.floor(max / 2);

	  while (min < mid && mid < max) {
	    const cmp = compare(arr[mid]);

	    if (cmp < 0) {
	      max = mid;
	      mid = Math.ceil((min + max) / 2);
	    } else if (cmp > 0) {
	      min = mid;
	      mid = Math.ceil((min + max) / 2);
	    } else {
	      return mid;
	    }
	  }

	  return -1;
	};

	/**
	 * @description Finds the possible index within ARR based on COMPARE.
	 * Returns -1 if COMPARE finds a match in ARR.
	 * @param {(a: any) => number} compare
	 * @param {any[]} arr
	 * @returns {number}
	 */
	find.findPossibleIndex = function findPossibleIndex(compare, arr) {
	  const len = arr.length;

	  if(len === 0){
	    return 0;
	  }

	  const cmp = compare(arr[0]);

	  if (cmp < 0) {
	    return 0;
	  }

	  if (cmp === 0) {
	    return -1;
	  }

	  let min = 0;
	  let max = len;
	  let mid = Math.floor(max / 2);

	  while (min < mid && mid < max) {
	    const cmp = compare(arr[mid]);

	    if (cmp < 0) {
	      max = mid;
	      mid = Math.ceil((min + max) / 2);
	    } else if (cmp > 0) {
	      min = mid;
	      mid = Math.ceil((min + max) / 2);
	    } else {
	      return -1;
	    }
	  }

	  return mid;
	};

	const { intersection } = intersection$1;
	const { difference } = difference$1;
	const { union } = union$1;
	const { similarity } = similarity$1;
	const { findIndex, findPossibleIndex } = find;

	var flexible = {
	    intersection,
	    difference,
	    union,
	    similarity,
	    findIndex,
	    findPossibleIndex
	};

	var index = /*@__PURE__*/getDefaultExportFromCjs(flexible);

	return index;

}));
