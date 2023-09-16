const { intersection } = require('./intersection.js');
const { difference } = require('./difference.js');
const { union } = require('./union.js');
const { similarity } = require('./similarity.js');
const { findIndex, findPossibleIndex } = require('./find.js');

module.exports = {
    intersection,
    difference,
    union,
    similarity,
    findIndex,
    findPossibleIndex
};