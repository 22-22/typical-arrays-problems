
exports.min = function min (array) {
  //return 0 if no params specified or an empty array passed
  if (!array || array.length === 0 ) return 0;

  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min ) min = array[i];
  }

  return min;
}

exports.max = function max (array) {
  if (!array || array.length === 0 ) return 0;

  //let max = Math.max(...array);

  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max ) max = array[i];
  }

  return max;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0 ) return 0;
  
  let sum = array.reduce((acc, item) => acc + item);
  let avg = sum / array.length;
  
  return avg;
}
