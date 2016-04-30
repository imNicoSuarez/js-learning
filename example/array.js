var arrayFunctions = require('../StandarAPI/array');

console.log('Method: array_push ----')

var array = [1,2,3]

arrayFunctions.array_push(array, 'hello', 'word');
console.log(array);



console.log('Method: array_pop ----')

arrayFunctions.array_pop(array)
console.log(array);



console.log('Method: array_reduce ----')

var array = [1,2,3]

total = arrayFunctions.array_reduce(array, function(previous_value, current_value) {
  return previous_value * current_value;
}, -1)

console.log(total);

total = arrayFunctions.array_reduce([1, 2, 3, 4], function(memo, current) {
  return memo * current
});

console.log(total)



console.log('Method: array_slice ----')
var array = ['a', 'b', 'c', 'd', 'e'];

var newArray = arrayFunctions.array_slice(array, 1, 3);
console.log(newArray);

var newArray = arrayFunctions.array_slice(array, 3);
console.log(newArray);

var newArray = arrayFunctions.array_slice(array, -2);
console.log(newArray);

var newArray = arrayFunctions.array_slice(array, 1, -2);
console.log(newArray);




