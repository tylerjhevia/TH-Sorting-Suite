import { expect } from 'chai';
import merge from '../scripts/merge-sort.js';
import arrays from '../scripts/generating-arrays.js';

describe('Merge Sort', () => {
  let testArray;

  beforeEach(() => {
    testArray = [];
  })

  it('should start with an array with 100 values', () => {
    arrays.fillArray(testArray);
    expect(testArray.length).to.equal(100);
  })

  it('should sort an array of numbers from lowest to highest', () => {
    arrays.fillArray(testArray);
    expect(testArray.length).to.equal(100);
    merge.mergeSort(testArray);
    expect(testArray).to.equal(testArray.sort());
  })

  it('should sort an array of letters into alphabetical order')

  // checking to see if test is comparing array order or array length
    it.skip('should check arrays for order and not for length', () => {
      let funArray = [1, 2];
      funArray = [2, 1];
      expect(testArray).to.equal(funArray);
    })
})
