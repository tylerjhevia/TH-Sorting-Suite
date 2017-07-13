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

  it('should contain only strings', () => {
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

describe('fillPositiveLarge', () => {
  let testArray = [];

  it('should fill an array with 10000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillPositiveLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
  })

  it('should contain only positive numbers', () => {
    arrays.fillPositiveLarge(testArray);
    expect(testArray.every((number) => number > 0)).to.deep.equal(true);
  })
})

describe('fillLettersLarge', () => {
  let testArray = [];

  it('should fill an array with 10000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillLettersLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
  })

  it('should contain only strings', () => {
    arrays.fillLettersLarge(testArray);
    expect(testArray.every((letter) => typeof(letter) === 'string')).to.deep.equal(true);
  })
})

describe('fillNegativeLarge', () => {
  let testArray = [];

  it('should fill an array with 10000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillNegativeLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
  })

  it('should contain only negative numbers', () => {
    arrays.fillNegativeLarge(testArray);
    expect(testArray.every((number) => number < 0)).to.deep.equal(true);
  })
})

describe('fillNegAndPosLarge', () => {
  let testArray = [];

  it('should fill an array with 10000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillNegAndPosLarge(testArray);
    expect(testArray.length).to.deep.equal(10000);
  })

  it('should contain both positive and negative numbers', () => {
    arrays.fillNegAndPosLarge(testArray);
    expect(testArray.some((number) => number > 0)).to.deep.equal(true);
    expect(testArray.some((number) => number < 0)).to.deep.equal(true);
  })
})

describe('fillPositiveHuge', () => {
  let testArray = [];

  it('should fill an array with 100000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillPositiveHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
  })

  it('should contain only positive numbers', () => {
    arrays.fillPositiveHuge(testArray);
    expect(testArray.every((number) => number > 0)).to.deep.equal(true);
  })
})

describe('fillLettersHuge', () => {
  let testArray = [];

  it('should fill an array with 100000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillLettersHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
  })

  it('should contain only strings', () => {
    arrays.fillLettersHuge(testArray);
    expect(testArray.every((letter) => typeof(letter) === 'string')).to.deep.equal(true);
  })
})

describe('fillNegativeHuge', () => {
  let testArray = [];

  it('should fill an array with 100000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillNegativeHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
  })

  it('should contain only negative numbers', () => {
    arrays.fillNegativeHuge(testArray);
    expect(testArray.every((number) => number < 0)).to.deep.equal(true);
  })
})

describe('fillNegAndPosHuge', () => {
  let testArray = [];

  it('should fill an array with 100000 values', () => {
    expect(testArray.length).to.deep.equal(0);
    arrays.fillNegAndPosHuge(testArray);
    expect(testArray.length).to.deep.equal(100000);
  })

  it('should contain both positive and negative numbers', () => {
    arrays.fillNegAndPosHuge(testArray);
    expect(testArray.some((number) => number > 0)).to.deep.equal(true);
    expect(testArray.some((number) => number < 0)).to.deep.equal(true);
  })
})
