const { findIndex, findPossibleIndex } = require('./find.js');

describe('findIndex', () => {
  describe('when an array is empty', () => {
    it('should return -1', () => {
      expect(findIndex([], 1)).toEqual(-1);
    });
  });

  describe('when an array has 1 element', () => {
    const arr = [2];

    it('should return -1', () => {
      expect(findIndex(arr, 1)).toEqual(-1);
      expect(findIndex(arr, 3)).toEqual(-1);
    });

    it('should return 0', () => {
      expect(findIndex(arr, 2)).toEqual(0);
    });
  });

  const originalArr = [-1, 0, 2, 3, 5, 7, 8];

  describe('when an item does not exist in an array', () => {
    it('should return -1', () => {
      expect(findIndex(originalArr, 1)).toEqual(-1);
      expect(findIndex(originalArr, 4)).toEqual(-1);
      expect(findIndex(originalArr, 9)).toEqual(-1);
    });
  });

  describe('when an item does exist in an array', () => {
    it('should return the correct index', () => {
      expect(findIndex(originalArr, -1)).toEqual(0);
      expect(findIndex(originalArr, 3)).toEqual(3);
      expect(findIndex(originalArr, 8)).toEqual(6);
    });
  });
});

describe('findPossibleIndex', () => {
  describe('when an array is empty', () => {
    it('should return 0', () => {
      expect(findPossibleIndex([], 1)).toEqual(0);
    });
  });

  describe('when an array has 1 element', () => {
    const arr = [2];

    it('should return -1', () => {
      expect(findPossibleIndex(arr, 2)).toEqual(-1);
    });

    it('should return 0', () => {
      expect(findPossibleIndex(arr, 1)).toEqual(0);
    });

    it('should return 1', () => {
      expect(findPossibleIndex(arr, 3)).toEqual(1);
    });
  });

  const originalArr = [-1, 0, 2, 3, 5, 7, 8];

  describe('when an item does not exist in an array', () => {
    it('should return the insertion index', () => {
      expect(findPossibleIndex(originalArr, -2)).toEqual(0);
      expect(findPossibleIndex(originalArr, 1)).toEqual(2);
      expect(findPossibleIndex(originalArr, 4)).toEqual(4);
      expect(findPossibleIndex(originalArr, 9)).toEqual(7);
    });
  });

  describe('when an item does exist in an array', () => {
    it('should return -1', () => {
      expect(findPossibleIndex(originalArr, -1)).toEqual(-1);
      expect(findPossibleIndex(originalArr, 3)).toEqual(-1);
      expect(findPossibleIndex(originalArr, 8)).toEqual(-1);
    });
  });
});