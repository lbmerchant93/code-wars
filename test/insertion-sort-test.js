const chai = require("chai");
const expect = chai.expect;
const {insertionSort} = require('../src/insertion-sort');

describe('sort', () => {
    it('empty', () => {
      expect(insertionSort([])).to.deep.equal([]);
    });
  
    it('one element', () => {
      expect(insertionSort([1])).to.deep.equal([1]);
    });
  
    it('two elements', () => {
      expect(insertionSort([2, 1])).to.deep.equal([1, 2]);
      expect(insertionSort([1, 2])).to.deep.equal([1, 2]);
    });
  
    it('more than two elements', () => {
      expect(insertionSort([10, 2, 4])).to.deep.equal([2, 4, 10]);
      expect(insertionSort([4, 5, 6, 1, 2, 3])).to.deep.equal([1, 2, 3, 4, 5, 6]);
      expect(insertionSort([1, 2, 3, 4, 5, 0])).to.deep.equal([0, 1, 2, 3, 4, 5]);
      expect(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).to.deep.equal([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ]);
      expect(insertionSort([5, 4, 3, 2, 1, 10, 9, 8, 7, 6])).to.deep.equal([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ]);
      expect(insertionSort([98322, 3242, 876, -234, 34, 12331])).to.deep.equal([
        -234, 34, 876, 3242, 12331, 98322,
      ]);
    });
  
    it('duplicate elements', () => {
      expect(insertionSort([1, 1])).to.deep.equal([1, 1]);
      expect(insertionSort([2, 2, 2])).to.deep.equal([2, 2, 2]);
      expect(insertionSort([2, 1, 2])).to.deep.equal([1, 2, 2]);
      expect(insertionSort([1, 1, 1, 1, 1, 1])).to.deep.equal([1, 1, 1, 1, 1, 1]);
      expect(insertionSort([7, 2, 4, 3, 1, 2])).to.deep.equal([1, 2, 2, 3, 4, 7]);
    });
  });