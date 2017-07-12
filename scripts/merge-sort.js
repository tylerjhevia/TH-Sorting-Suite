const mergeArrays = (array1, array2) => {
  var sortedArray = [];
  while (array1.length > 0 || array2.length > 0) {
    console.log('array 1: ' + array1, 'array 2: ' + array2,'sorted array: ' + sortedArray);
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
