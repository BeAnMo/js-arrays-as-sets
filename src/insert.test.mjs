import { bisectionInsert } from './insert.mjs';

describe('bisectionInsert', () => {
  const originalArr = [0, 2, 3, 5, 6, 8, 11];
  let testArr = [];

  beforeEach(() => {
    testArr = [...originalArr];
  });

  describe('when inserting', () => {
    describe('and the given item < than the first element', () => {
      it('should insert at the beginning of the array', () => {
        expect(bisectionInsert(testArr, -1)).toEqual([-1, ...originalArr]);
      });
    });

    describe('and the given item > than the last element', () => {
      it('should insert at the end of the array', () => {
        expect(bisectionInsert(testArr, 12)).toEqual([...originalArr, 12]);
      });
    });

    describe('and the given item is within the first & last items', () => {
      describe('and not in the array', () => {
        it('should insert the new item in the correct position', () => {
          expect(bisectionInsert(testArr, 4)).toEqual([0, 2, 3, 4, 5, 6, 8, 11]);
        });
      });

      describe('and is in the array', () => {
        it('should return the original array', () => {
          expect(bisectionInsert(testArr, 5)).toEqual(originalArr);
        });
      });
    });
  });
  /*
  describe('when deleting', () => {
    describe('and the given item is less than the first element', () => {
      it('should return the original array', () => {
        expect(bisectionInsert(testArr, 1, -1)).toEqual(originalArr);
      });
    });

    describe('and the given item is more than the last element', () => {
      it('should return the original array', () => {
        expect(bisectionInsert(testArr, 1, 12)).toEqual(originalArr);
      });
    });

    describe('and the given item is not in the list', () => {
      it('should return the original array', () => {
        expect(bisectionInsert(testArr, 1, 4)).toEqual(originalArr);
      });
    });

    describe('and the given item is the first item in the list', () => {
      it('should return the array without the first item', () => {
        expect(bisectionInsert(testArr, 1, 0)).toEqual(originalArr.slice(1));
      });
    });

    describe('and the given item is the last item in the list', () => {
      it('should return the array without the last item', () => {
        expect(bisectionInsert(testArr, 1, 11)).toEqual(originalArr.slice(0, -1));
      });
    });

    describe('and the given item is in the list', () => {
      it('should remove that item', () => {
        expect(bisectionInsert(testArr, 1, 5)).toEqual(originalArr.filter(n => n !== 5));
      });
    });
  });
  */
});

function runtime(name, proc) {
  const start = performance.now();
  const results = proc();
  const end = performance.now();
  console.log(`[runtime:${name}]`, `${(end - start).toFixed(2)}ms`);
  return results;
}

function assertSort(arr) {
  let prev = -1;

  for (const item of arr) {
    if (prev >= item) {
      console.error('not ascending sort');
      return false;
    }
  }
  return true;
}

