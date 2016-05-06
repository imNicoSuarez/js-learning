var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;


var arrayFunctions = require('../../StandarAPI/array');

describe('Array', function() {
  describe('array_push()', function () {
    it('should return the total number of elements in the array', function () {
      var array = [1,2,3];

      expect(arrayFunctions.array_push(array, 'hello', 'word')).to.equal(5);
      expect(arrayFunctions.array_push(array, 'bye')).to.equal(6);
    });

    it('should modify the original object', function(){
      var array = [1,2,3];

      arrayFunctions.array_push(array, 'hello', 'word');

      expect(array).to.include('hello');
      expect(array).to.include('word');
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

      expect(totalSum).to.equal(6);
    });

    it('should return the sum of all elements starting from the initial value', function(){
      var array = [1,2,3];

      var totalSum = arrayFunctions.array_reduce(array, function(preview_value, current_value){
        return preview_value + current_value;
      }, 10);

      expect(totalSum).to.equal(16);
    })

    it('should return the sum of all elements more their index', function(){
      var array = [1,2,3];

      var totalSum =  arrayFunctions.array_reduce(array,
        function(preview_value, current_value, index_value){
          return preview_value +  (current_value + index_value);
      });

      expect(totalSum).to.equal(9);
    })

    it('should return the total of her multiplication of all elements', function(){
      var array = [1, 2, 3, 4];

      var totalMulti = arrayFunctions.array_reduce(array, function(memo, current) {
        return memo * current
      });

      expect(totalMulti).to.equal(24);
    })

    it('should return the total of the multiplication of all elements, starting from -1', function(){
      var array = [1, 2, 3];

      var totalMulti = arrayFunctions.array_reduce(array, function(memo, current) {
        return memo * current
      }, -1);

      expect(totalMulti).to.equal(-6);
    })

    it('should return the total of the multiplication of all elements, starting from 0', function(){
      var array = [1, 2, 3];

      var totalMulti = arrayFunctions.array_reduce(array, function(memo, current) {
        return memo * current
      }, 0);

      expect(totalMulti).to.equal(0);
    })

    it('should return null', function(){
      var array = [100, 0, 2];

      var valueReturn = arrayFunctions.array_reduce(array, function(memo, current) {
        if (current === 0) {
        return null;
        } else if (memo === null) {
        return null;
        } else {
        return memo / current;
        }
      });

      expect(valueReturn).to.equal(null);
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

    it('should return an array with an element that lies between -4 and -3', function() {
      var array = [1, 2, 3, 4];

      var result = arrayFunctions.array_slice(array, -4, -3);

      expect(result).to.deep.equal([1]);
    });

    it('should return a empty array if you add 0 and 0', function() {
      var array = [1, 2, 3, 4];

      var result = arrayFunctions.array_slice(array, 0, 0);

      expect(result).to.deep.equal([]);
    });
  });

});