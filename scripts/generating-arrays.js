

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function fillArray(arr) {
  for (let i = 0; i < 100; i++) {
    arr.push(Math.round(Math.random() * (1000 - 1) + 1));
  }
  return arr;
}

function fillLetters(array) {
  for (let i = 0; i < 10; i++) {
    array.push(alphabet[Math.round(Math.random() * (25 - 0))])
  }
  return array
}

export default {fillArray, fillLetters, alphabet};
