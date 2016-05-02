var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;


var objectFunctions = require('../../StandarAPI/object');

describe('Object', function() {
  describe('object_equal()', function () {

    it('should return true if the objects are equal', function () {
      var obj1 = {code: 'UY'};
      var obj2 = {code: 'UY'};

      expect(true).to.deep.equal(objectFunctions.object_equal(obj1, obj2));
      expect(true).to.deep.equal(objectFunctions.object_equal(obj2, obj1));
    });

    it('should return false if the objects are different', function () {
      var obj1 = {code: 'UY'};
      var obj2 = {code: 'UY', city: 'MVD'};

      expect(false).to.deep.equal(objectFunctions.object_equal(obj1, obj2));
      expect(false).to.deep.equal(objectFunctions.object_equal(obj2, obj1));
    });

    it('should return false if the objects are equal but different values', function () {
      var obj1 = {code: 'UY'};
      var obj2 = {code: 'AR'};

      expect(false).to.deep.equal(objectFunctions.object_equal(obj1, obj2));
      expect(false).to.deep.equal(objectFunctions.object_equal(obj2, obj1));
    });
  });

  describe('object_includes()', function () {

    it('should return true if obj1 is included in the obj2', function () {
      var obj1 = {code: 'UY'};
      var obj2 = {code: 'UY'};

      expect(true).to.deep.equal(objectFunctions.object_includes(obj1, obj2));
    });

    it('should return false if obj1 is not included in the obj2', function () {
      var obj1 = {code: 'AR'};
      var obj2 = {code: 'UY', city: 'MVD'};

      expect(false).to.deep.equal(objectFunctions.object_includes(obj1, obj2));
      expect(false).to.deep.equal(objectFunctions.object_includes(obj2, obj1));
    });

    it('should return true if the objects are different but inlcude the object', function () {
      var obj1 = {code: 'UY'};
      var obj2 = {code: 'UY', city: 'MVD'};

      expect(true).to.deep.equal(objectFunctions.object_includes(obj1, obj2));
    });
  });
});