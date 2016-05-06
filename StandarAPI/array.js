/*
  Method array_push
*/
function array_push(array) {
  for (var i = 1; i < arguments.length; i++) {
    var value = arguments[i];
    array[array.length] = value;
  }

  return array.length;
}


/*
  Method array_pop
*/
function array_pop(array) {
  array.splice(-1);

  return array;
}


/*
  Method array_reduce
*/
function array_reduce(array, callback, initial_value) {
  var previous_value, i;

  if (typeof initial_value !== 'undefined') {
     previous_value = initial_value;
     i = 0;
  } else {
    previous_value =  array[0];
    i = 1;
  }

  for (i; i < array.length; i++) {
    previous_value = callback(previous_value, array[i], i);
  }

  return previous_value;
}

/*
  Method array_slice
*/

function array_slice(array, begin, end) {

  var newArray, newBegin, newEnd;

  newArray = [];

  newEnd = typeof end !== 'undefined' ? end : array.length;
  newBegin = (begin < 0) ? 0 : begin;
  newEnd = (begin < 0 && typeof end === 'undefined') ? begin : newEnd;
  newEnd = (newEnd < 0) ? (array.length + newEnd) : newEnd;

  for (var i = newBegin; i < newEnd; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}


/*
  Definition of exports
*/

exports.array_push = array_push;
exports.array_pop = array_pop;
exports.array_reduce = array_reduce;
exports.array_slice = array_slice;