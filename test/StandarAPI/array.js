var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;


var arrayFunctions = require('../../StandarAPI/array');

describe('Array', function() {
  describe('array_push()', function () {
    it('should return the total number of elements in the array', function () {
      var array = [1,2,3];
      assert.equal(5, arrayFunctions.array_push(array, 'hello', 'word'));
      assert.equal(6, arrayFunctions.array_push(array, 'bye'));
    });

    it('should modify the original object', function(){
      var array = [1,2,3];

      arrayFunctions.array_push(array, 'hello', 'word');

      assert.include(array, 'hello');
      assert.include(array, 'word');
    })
  });

  describe('array_pop()', function () {

    it('should return the same array with an element less', function () {
      var array = [1,2,3];

      var newArray =  arrayFunctions.array_pop(array);

      expect(newArray).to.deep.equal([1, 2]);

    });

    it('should modify the original object with an element less', function(){
      var array = [1,2,3];

      arrayFunctions.array_pop(array);

      expect(array).to.deep.equal([1, 2]);
    })
  });

  describe('array_reduce()', function () {

    it('should return the sum of all elements of the array', function () {
      var array = [1,2,3];

      var totalSum =  arrayFunctions.array_reduce(array, function(preview_value, current_value){
        return preview_value + current_value;
      });

      assert.equal(6, totalSum);
    });

    it('should return the sum of all elements starting from the initial value', function(){
      var array = [1,2,3];

      var totalSum = arrayFunctions.array_reduce(array, function(preview_value, current_value){
        return preview_value + current_value;
      }, 10);

      assert.equal(16, totalSum);
    })

    it('should return the sum of all elements more their index', function(){
      var array = [1,2,3];

      var totalSum =  arrayFunctions.array_reduce(array,
        function(preview_value, current_value, index_value){
          return preview_value +  (current_value + index_value);
      });

      assert.equal(9, totalSum);
    })

  });

  describe('array_slice()', function () {
    it('should return an array of elements between position 1 and 3', function(){
      var array = ['a', 'b', 'c', 'd', 'e'];

      var newArray = arrayFunctions.array_slice(array, 1, 3);

      expect(newArray).to.deep.equal(['b', 'c']);

    });

    it('should return an array with elements of position 3 towards the end', function(){
      var array = ['a', 'b', 'c', 'd', 'e'];

      var newArray = arrayFunctions.array_slice(array, 3);

      expect(newArray).to.deep.equal(['d', 'e']);
    });

    it('should return an array with all elements except the last two', function(){
      var array = ['a', 'b', 'c', 'd', 'e'];

      var newArray = arrayFunctions.array_slice(array, -2);

      expect(newArray).to.deep.equal(['a', 'b', 'c']);
    });

    it('should return an array with elements that are after position 1 and before the last two', function(){
      var array = ['a', 'b', 'c', 'd', 'e'];

      var newArray = arrayFunctions.array_slice(array, 1, -2);

      expect(newArray).to.deep.equal(['b', 'c']);
    });
  });

});