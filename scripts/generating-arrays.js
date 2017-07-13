const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

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
    array.push(Math.round(Math.random() * (-100 - 100) + 100));
  }
  return array;
}

export default {fillPositive, fillLetters, fillNegative, fillNegAndPos, alphabet};
