import { expect } from 'chai';
import arrays from '../scripts/generating-arrays.js';

describe('fillPositive', () => {
  let testArray = [];

  it('should fill an array with 1000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillPositive(testArray);
    expect(testArray.length).to.deep.equal(1000);
  })

  it('should contain only positive numbers', () => {
    arrays.fillPositive(testArray);
    expect(testArray.every((number) => number > 0)).to.deep.equal(true);
  })
})

describe('fillLetters', () => {
  let testArray = [];

  it('should fill an array with 1000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillLetters(testArray);
    expect(testArray.length).to.deep.equal(1000);
  })

  it('should contain only letters', () => {
    arrays.fillLetters(testArray);
    expect(testArray.every((letter) => typeof(letter) === 'string')).to.deep.equal(true);
  })
})

describe('fillNegative', () => {
  let testArray = [];

  it('should fill an array with 1000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillNegative(testArray);
    expect(testArray.length).to.deep.equal(1000);
  })

  it('should contain only negative numbers', () => {
    arrays.fillNegative(testArray);
    expect(testArray.every((number) => number < 0)).to.deep.equal(true);
  })
})

describe('fillNegAndPos', () => {
  let testArray = [];

  it('should fill an array with 1000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillNegAndPos(testArray);
    expect(testArray.length).to.deep.equal(1000);
  })

  it('should contain both positive and negative numbers', () => {
    arrays.fillNegAndPos(testArray);
    expect(testArray.some((number) => number > 0)).to.deep.equal(true);
    expect(testArray.some((number) => number < 0)).to.deep.equal(true);
  })
})
