function mergeArrays (array1, array2) {
  var sortedArray = [];
  while (array1.length > 0 || array2.length > 0) {
    if (array1[0] <= array2[0] || array2[0] === undefined) {
      var lower = array1[0];
      array1.shift();
      sortedArray.push(lower);
    } else {
      var lower = array2[0];
        array2.shift();
        sortedArray.push(lower);
      }
  }
  return sortedArray;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  while (array.length > 1) {
    var arrayMid = Math.round(array.length / 2)
    return mergeArrays(mergeSort(array.slice(0, arrayMid)), mergeSort(array.slice(arrayMid)));
  }
}
export default {mergeArrays, mergeSort};
