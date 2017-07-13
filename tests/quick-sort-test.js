import { expect } from 'chai';
import quick from '../scripts/quick-sort.js';
import arrays from '../scripts/generating-arrays.js';

describe('Quicksort', () => {
  let testArray;

  beforeEach(() => {
    testArray = [];
  })

  it('should sort an array of 1000 positive numbers from lowest to highest', () => {
    arrays.fillPositive(testArray);
    expect(testArray.length).to.deep.equal(1000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = quick.quickSort(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array of 1000 letters into alphabetical order', () => {
    arrays.fillLetters(testArray);
    expect(testArray.length).to.deep.equal(1000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = quick.quickSort(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort());
  })

  it('should sort an array of 1000 negative numbers into alphabetical order', () => {
    arrays.fillNegative(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    expect(testArray.length).to.deep.equal(1000);
    let sorted = quick.quickSort(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array that contains 1000 negative and positive numbers', () => {
    arrays.fillNegAndPos(testArray);
    expect(testArray.length).to.deep.equal(1000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = quick.quickSort(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })
})
