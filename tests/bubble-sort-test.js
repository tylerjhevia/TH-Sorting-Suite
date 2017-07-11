import { expect } from 'chai';
import bubble from '../scripts/bubble-sort.js';

describe('fillArray', () => {
  let testArray = [];

  it('should fill an array with 100 integers', () => {
    expect(testArray.length).to.equal(0);
    bubble.fillArray(testArray);
    expect(testArray.length).to.equal(100);
  })
})

describe('Bubble Sort', () => {
  let testArray;

  beforeEach(() => {
    testArray = [];
  })

  it('should start with an array with 100 values', () => {
    bubble.fillArray(testArray);
    expect(testArray.length).to.equal(100);
  })

  it('should sort an array of numbers from lowest to highest', () => {
    bubble.fillArray(testArray);
    expect(testArray.length).to.equal(100);
    bubble.bubble(testArray);
    expect(testArray).to.equal(testArray.sort());
  })

  it('should sort an array of letters into alphabetical order')

  // checking to see if test is comparing array order or array length
    it('should check arrays for order and not for length', () => {
      let funArray = [1, 2];
      funArray = [2, 1];
      expect(testArray).to.equal(funArray);
    })
})
