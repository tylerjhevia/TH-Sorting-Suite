const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let challengeArray = ['d', 'b', 'a', 'c'];
let challengeCorrect = ['a', 'b', 'c', 'd'];

function fillPositive(array) {
  for (let i = 0; i < 1000; i++) {
    array.push(Math.round(Math.random() * (1000 - 1) + 1));
  }
  return array;
}

function fillLetters(array) {
  for (let i = 0; i < 1000; i++) {
    array.push(alphabet[Math.round(Math.random() * (25 - 0))])
  }
  return array
}

function fillNegative(array) {
  for (let i = 0; i < 1000; i++) {
    array.push(Math.round(Math.random() * (-1 - 100) - 1));
  }
  return array;
}

function fillNegAndPos(array) {
  for (let i = 0; i < 1000; i++) {
    let random = Math.round(Math.random() * (-100 - 100) + 100);
    if (random === 0) {
      random = 1;
    }
    array.push(random);
  }
  return array;
}

function fillPositiveLarge(array) {
  for (let i = 0; i < 10000; i++) {
    array.push(Math.round(Math.random() * (10000 - 1) + 1));
  }
  return array;
}

function fillLettersLarge(array) {
  for (let i = 0; i < 10000; i++) {
    array.push(alphabet[Math.round(Math.random() * (25 - 0))])
  }
  return array
}

function fillNegativeLarge(array) {
  for (let i = 0; i < 10000; i++) {
    array.push(Math.round(Math.random() * (-1 - 100) - 1));
  }
  return array;
}

function fillNegAndPosLarge(array) {
  for (let i = 0; i < 10000; i++) {
    let random = Math.round(Math.random() * (-100 - 100) + 100);
    if (random === 0) {
      random = 1;
    }
    array.push(random);
  }
  return array;
}


function fillPositiveHuge(array) {
  for (let i = 0; i < 100000; i++) {
    array.push(Math.round(Math.random() * (10000 - 1) + 1));
  }
  return array;
}

function fillLettersHuge(array) {
  for (let i = 0; i < 100000; i++) {
    array.push(alphabet[Math.round(Math.random() * (25 - 0))])
  }
  return array
}

function fillNegativeHuge(array) {
  for (let i = 0; i < 100000; i++) {
    array.push(Math.round(Math.random() * (-1 - 100) - 1));
  }
  return array;
}

function fillNegAndPosHuge(array) {
  for (let i = 0; i < 100000; i++) {
    let random = Math.round(Math.random() * (-100 - 100) + 100);
    if (random === 0) {
      random = 1;
    }
    array.push(random);
  }
  return array;
}

export default {fillPositive, fillLetters, fillNegative, fillNegAndPos, alphabet, challengeArray, challengeCorrect, fillPositiveLarge, fillLettersLarge, fillNegativeLarge, fillNegAndPosLarge, fillPositiveHuge, fillLettersHuge, fillNegativeHuge, fillNegAndPosHuge};
