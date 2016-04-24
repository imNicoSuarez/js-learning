var arrayFunctions = require('../StandarAPI/array');

var array = [1,2,3]


arrayFunctions.array_push(array, 'hello', 'word');
console.log(array);


arrayFunctions.array_pop(array)
console.log(array);


var array = [1,2,3]

total = arrayFunctions.array_reduce(array, function(previous_value, current_value) {
  return previous_value * current_value;
}, -1)

console.log(total);