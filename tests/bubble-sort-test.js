import { expect } from 'chai';
import bubble from '../scripts/bubble-sort.js';
import arrays from '../scripts/generating-arrays.js';

describe('Bubble Sort', () => {
  let testArray;

  beforeEach(() => {
    testArray = [];
  })

  it('should sort an array of 1000 positive numbers from lowest to highest', () => {
    arrays.fillPositive(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array of 1000 letters into alphabetical order', () => {
    arrays.fillLetters(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    expect(testArray.length).to.deep.equal(1000);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort());
  })

  it('should sort an array of 1000 negative numbers into alphabetical order', () => {
    arrays.fillNegative(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    expect(testArray.length).to.deep.equal(1000);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array of that contains 1000 negative and positive numbers', () => {
    arrays.fillNegAndPos(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    expect(testArray.length).to.deep.equal(1000);
    let sorted = bubble.bubble(testArray);
    expect(testArray).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })
})
