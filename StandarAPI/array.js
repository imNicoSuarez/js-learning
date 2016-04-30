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

  previous_value = initial_value || array[0];
  i = (typeof initial_value !== 'undefined')? 0 : 1;

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

  end = end || array.length;

  if (begin < 0) {
    newEnd = (array.length + begin);
    newBegin = 0;
  } else {
    newEnd = (end < 0)? (array.length + end) : end;
    newBegin = begin;
  }

  for (var i = 0; i < array.length; i++) {
    if (i >=  newBegin && i < newEnd) {
      newArray.push(array[i]);
    }
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