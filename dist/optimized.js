(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.arrsetOptimized = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var insert = {};

	insert.bisectionInsert = function bisectionInsert(arr, item) {
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
	};

	var intersection$1 = {};

	/**
	 * @param {(number | string)[]} sm 
	 * @param {(number | string)[]} lg 
	 * @returns {(number | string)[]}
	 */

	intersection$1.intersection = function intersection(sm, lg) {
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
	};

	var difference$1 = {};

	/**
	 * @param {(number | string)[]} sm 
	 * @param {(number | string)[]} lg 
	 * @returns {(number | string)[]}
	 */

	difference$1.difference = function difference(sm, lg) {
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
	};

	var union$1 = {};

	/**
	 * @param {(number | string)[]} sm 
	 * @param {(number | string)[]} lg 
	 * @returns {(number | string)[]}
	 */

	union$1.union = function union(sm, lg) {
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
	};

	var similarity$1 = {};

	/**
	 * @param {(number | string)[]} sm 
	 * @param {(number | string)[]} lg 
	 * @returns {number}
	 */

	similarity$1.similarity = function similarity(sm, lg) {
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
	};

	var find = {};

	/**
	 * @description Finds the index of ITEM within ARR.
	 * Returns -1 if ARR does not contain ITEM.
	 * @param {(number | string)[]} arr 
	 * @param {number | string} item 
	 * @returns {number}
	 */

	find.findIndex = function findIndex(arr, item) {
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
	};

	/**
	 * @description Finds the possible index of ITEM within ARR.
	 * Returns -1 if ARR contains ITEM.
	 * @param {(number | string)[]} arr 
	 * @param {number | string} item 
	 * @returns {number}
	 */
	find.findPossibleIndex = function findPossibleIndex(arr, item) {
	  if (item < arr[0]) {
	    return 0;
	  }

	  // This can be true -1 < -1 ???
	  if (item === arr[0]) {
	    return -1;
	  }

	  const len = arr.length;

	  if(len === 1){
	    return 1;
	  }

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
	};

	const { bisectionInsert } = insert;
	const { intersection } = intersection$1;
	const { difference } = difference$1;
	const { union } = union$1;
	const { similarity } = similarity$1;
	const { findIndex, findPossibleIndex } = find;

	var optimized = {
	    bisectionInsert,
	    intersection,
	    difference,
	    union,
	    similarity,
	    findIndex,
	    findPossibleIndex
	};

	var index = /*@__PURE__*/getDefaultExportFromCjs(optimized);

	return index;

}));
