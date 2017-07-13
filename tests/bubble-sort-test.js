import { expect } from 'chai';
import bubble from '../scripts/bubble-sort.js';
import arrays from '../scripts/generating-arrays.js';

describe('Bubble Sort', () => {
  let testArray;

  beforeEach(() => {
    testArray = [];
  })

  it('should start with an array with 1000 values', () => {
    arrays.fillArray(testArray);
    expect(testArray.length).to.deep.equal(1000);
  })

  it('should sort an array of numbers from lowest to highest', () => {
    arrays.fillArray(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    bubble.bubble(testArray);
    expect(testArray).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array of letters into alphabetical order', () => {
    arrays.fillLetters(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray.length).to.deep.equal(10);
    bubble.bubble(testArray);
    expect(testArray).to.deep.equal(testArrayCopy.sort());
  })

  it('should sort an array that contains both negative and positive numbers', () => {
    arrays.fillNegAndPos(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    bubble.bubble(testArray);
    expect(testArray).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  // checking to see if test is comparing array order or array length
    it('should check arrays for order and not for length', () => {
      let array1 = [1, 2];
      let array2 = [2, 1];
      expect(array1).to.not.equal(array2);
      array2 = [1, 2];
      expect(array1).to.deep.equal(array2);
    })
})
