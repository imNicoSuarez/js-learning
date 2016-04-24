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
  Definition of exports
*/

exports.array_push = array_push;
exports.array_pop = array_pop;
exports.array_reduce = array_reduce;