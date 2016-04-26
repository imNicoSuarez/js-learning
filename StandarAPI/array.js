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

  var previous_value;

  if (typeof initial_value !== 'undefined') {
    previous_value = initial_value;
  }

  for (var i = 0; i < array.length; i++) {
    if (previous_value == null ){
      previous_value = 0;
    }

    previous_value = callback(previous_value, array[i], i);
  }

  return previous_value;
}

/*
  Method array_slice
*/
function array_slice(array, begin, end) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (typeof end !== 'undefined') {
      if (i >=  begin && i < end) {
        newArray.push(array[i]);

      } else if (end < 0) {
        newEnd = (array.length + end);

        if (i >=  begin && i < newEnd) {
          newArray.push(array[i]);
        }
      }
    } else {
      if (begin < 0) {
        newBegin = ((array.length - 1)+ begin);

        if (i <= newBegin) {
          newArray.push(array[i]);
        }

      } else if (i >= begin) {
        newArray.push(array[i]);
      }
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