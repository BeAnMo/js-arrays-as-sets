const { intersection } = require('./intersection.js');

describe('intersection', () => {
  const compare = (m, n) => m - n;
  const cases = [
    // Empties
    { small: [], large: [], expected: [] },
    { small: [-1, 2, 3, 5], large: [], expected: [] },
    { small: [], large: [2, 3, 6], expected: [] },

    // small first < large first && small last < large last
    { small: [-1, 2, 3], large: [0, 2, 3, 5], expected: [2, 3] },
    // small first < large first && small last = large last
    { small: [-1, 2, 5], large: [0, 2, 3, 5], expected: [2, 5] },
    // small first < large first && small last > large last
    { small: [-1, 2, 7], large: [0, 2, 3, 5], expected: [2] },

    // small first = large first && small last < large last
    { small: [0, 2, 3], large: [0, 2, 3, 5], expected: [0, 2, 3] },
    // small first = large first && small last = large last
    { small: [0, 2, 5], large: [0, 2, 3, 5], expected: [0, 2, 5] },
    // small first = large first && small last > large last
    { small: [0, 2, 6], large: [0, 2, 3, 5], expected: [0, 2] },

    // small first > large first && small last < large last
    { small: [2, 3, 4], large: [-1, 2, 3, 5], expected: [2, 3] },
    // small first > large first && small last = large last
    { small: [2, 3, 5], large: [-1, 2, 3, 5], expected: [2, 3, 5] },
    // small first > large first && small last > large last
    { small: [2, 3, 6], large: [-1, 2, 3, 5], expected: [2, 3] },

    // swapped inputs
    // small first < large first && small last < large last
    { large: [-1, 2, 3], small: [0, 2, 3, 5], expected: [2, 3] },
    // small first < large first && small last = large last
    { large: [-1, 2, 5], small: [0, 2, 3, 5], expected: [2, 5] },
    // small first < large first && small last > large last
    { large: [-1, 2, 7], small: [0, 2, 3, 5], expected: [2] },

    // small first = large first && small last < large last
    { large: [0, 2, 3], small: [0, 2, 3, 5], expected: [0, 2, 3] },
    // small first = large first && small last = large last
    { large: [0, 2, 5], small: [0, 2, 3, 5], expected: [0, 2, 5] },
    // small first = large first && small last > large last
    { large: [0, 2, 6], small: [0, 2, 3, 5], expected: [0, 2] },

    // small first > large first && small last < large last
    { large: [2, 3, 4], small: [-1, 2, 3, 5], expected: [2, 3] },
    // small first > large first && small last = large last
    { large: [2, 3, 5], small: [-1, 2, 3, 5], expected: [2, 3, 5] },
    // small first > large first && small last > large last
    { large: [2, 3, 6], small: [-1, 2, 3, 5], expected: [2, 3] },
  ];

  describe.each(cases)(
    'across different scenarios',
    ({ small, large, expected }) => {
      describe(`when given ${small.join(',')} & ${large.join(',')}`, () => {
        it(`should return the expected`, () => {
          expect(intersection(compare, small, large)).toEqual(expected);
        });
      });
    }
  );
});
