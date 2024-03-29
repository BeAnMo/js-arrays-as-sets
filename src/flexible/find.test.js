const { findIndex, findPossibleIndex } = require('./find.js');

const compare = (n) => (m) => n - m;

describe('findIndex', () => {
  describe('when an array is empty', () => {
    it('should return -1', () => {
      expect(findIndex(compare(1), [])).toEqual(-1);
    });
  });

  describe('when an array has 1 element', () => {
    const arr = [2];

    it('should return -1', () => {
      expect(findIndex(compare(1), arr)).toEqual(-1);
      expect(findIndex(compare(3), arr)).toEqual(-1);
    });

    it('should return 0', () => {
      expect(findIndex(compare(2), arr)).toEqual(0);
    });
  });

  const originalArr = [-1, 0, 2, 3, 5, 7, 8];

  describe('when an item does not exist in an array', () => {
    it('should return -1', () => {
      expect(findIndex(compare(1), originalArr)).toEqual(-1);
      expect(findIndex(compare(4), originalArr)).toEqual(-1);
      expect(findIndex(compare(9), originalArr)).toEqual(-1);
    });
  });

  describe('when an item does exist in an array', () => {
    it('should return the correct index', () => {
      expect(findIndex(compare(-1), originalArr)).toEqual(0);
      expect(findIndex(compare(3), originalArr)).toEqual(3);
      expect(findIndex(compare(8), originalArr)).toEqual(6);
    });
  });
});

describe('findPossibleIndex', () => {
  describe('when an array is empty', () => {
    it('should return 0', () => {
      expect(findPossibleIndex(compare(1), [])).toEqual(0);
    });
  });
  
  describe('when an array has 1 element', () => {
    const arr = [2];

    it('should return -1', () => {
      expect(findPossibleIndex(compare(2), arr)).toEqual(-1);
    });

    it('should return 0', () => {
      expect(findPossibleIndex(compare(1), arr)).toEqual(0);
    });

    it('should return 1', () => {
      expect(findPossibleIndex(compare(3), arr)).toEqual(1);
    });
  });
  

  const originalArr = [-1, 0, 2, 3, 5, 7, 8];

  describe('when an item does not exist in an array', () => {
    it('should return the insertion index', () => {
      expect(findPossibleIndex(compare(-2), originalArr)).toEqual(0);
      expect(findPossibleIndex(compare(1), originalArr)).toEqual(2);
      expect(findPossibleIndex(compare(4), originalArr)).toEqual(4);
      expect(findPossibleIndex(compare(9), originalArr)).toEqual(7);
    });
  });

  describe('when an item does exist in an array', () => {
    it('should return -1', () => {
      expect(findPossibleIndex(compare(-1), originalArr)).toEqual(-1);
      expect(findPossibleIndex(compare(3), originalArr)).toEqual(-1);
      expect(findPossibleIndex(compare(8), originalArr)).toEqual(-1);
    });
  });
});
