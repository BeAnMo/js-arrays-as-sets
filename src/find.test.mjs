import { findIndex, findPossibleIndex } from './find.mjs';

describe('findIndex', () => {
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
  const originalArr = [-1, 0, 2, 3, 5, 7, 8];

  describe('when an item does not exist in an array', () => {
    it('should return -1', () => {
      expect(findPossibleIndex(originalArr, -2)).toEqual(0);
      expect(findPossibleIndex(originalArr, 1)).toEqual(2);
      expect(findPossibleIndex(originalArr, 4)).toEqual(4);
      expect(findPossibleIndex(originalArr, 9)).toEqual(7);
    });
  });

  describe('when an item does exist in an array', () => {
    it('should return the correct index', () => {
      expect(findPossibleIndex(originalArr, -1)).toEqual(0);
      expect(findPossibleIndex(originalArr, 3)).toEqual(3);
      expect(findPossibleIndex(originalArr, 8)).toEqual(6);
    });
  });
});