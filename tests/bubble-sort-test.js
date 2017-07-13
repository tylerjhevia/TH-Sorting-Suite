import { expect } from 'chai';
import bubble from '../scripts/bubble-sort.js';
import arrays from '../scripts/generating-arrays.js';

describe('Bubble Sort', () => {
  let testArray;

  beforeEach(() => {
    testArray = [];
  })

  it('should fulfill the comp challenge by sorting the challenge array', () => {
    let challenge = arrays.challengeArray;
    let correct = arrays.challengeCorrect;
    let sorted = bubble.bubble(challenge);
    expect(sorted).to.deep.equal(correct);
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

  it('should sort an array of 10000 positive numbers from lowest to highest', () => {
    arrays.fillPositiveLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array of 10000 letters into alphabetical order', () => {
    arrays.fillLettersLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort());
  })

  it('should sort an array of 10000 negative numbers into alphabetical order', () => {
    arrays.fillNegativeLarge(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    expect(testArray.length).to.deep.equal(10000);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it('should sort an array that contains 10000 negative and positive numbers', () => {
    arrays.fillNegAndPosLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it.skip('should sort an array of 100000 positive numbers from lowest to highest', () => {
    arrays.fillPositiveHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it.skip('should sort an array of 100000 letters into alphabetical order', () => {
    arrays.fillLettersHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort());
  })

  it.skip('should sort an array of 100000 negative numbers into alphabetical order', () => {
    arrays.fillNegativeHuge(testArray);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    expect(testArray.length).to.deep.equal(100000);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })

  it.skip('should sort an array that contains 100000 negative and positive numbers', () => {
    arrays.fillNegAndPosHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
    let testArrayCopy = Array.from(testArray);
    expect(testArray).to.deep.equal(testArrayCopy);
    let sorted = bubble.bubble(testArray);
    expect(sorted).to.deep.equal(testArrayCopy.sort((a, b) => a - b));
  })
})
