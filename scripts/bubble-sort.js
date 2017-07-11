

const bubble = array => {
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

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


export default {bubble, fillArray, fillLetters};
