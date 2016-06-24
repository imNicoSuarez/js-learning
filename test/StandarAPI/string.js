var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;


var stringFunctions = require('../../StandarAPI/string');

describe('String', function() {
  describe('string_indexOf()', function () {

    it('should return the index of string', function () {
      expect(2).to.deep.equal(stringFunctions.string_indexOf('hello', 'l'));
      expect(3).to.deep.equal(stringFunctions.string_indexOf('hello', 'lo'));
    });

    it('should return the index of string', function () {
      expect(3).to.deep.equal(stringFunctions.string_indexOf('hello', 'lo'));
    });

    it('should return the index of string', function () {
      expect(-1).to.deep.equal(stringFunctions.string_indexOf('hhh', 'hello'));
    });

    it('should return -1 if the string not found', function () {
      expect(-1).to.deep.equal(stringFunctions.string_indexOf('hello', 'world'));
    });

    it('should return the index of string but initial index is 5', function () {
      expect(8).to.deep.equal(stringFunctions.string_indexOf('abracadabra', 'bra', 5));
    });
  });

  describe('string_split()', function () {
    it('should return an array with the string separated by space. ', function () {
      expect(['hello', 'world', ':)']).to.deep.equal(stringFunctions.string_split('hello world :)', ' '));
    });

    it('should return an array with the string separated by "l". ', function () {
      expect(['he','o']).to.deep.equal(stringFunctions.string_split('hello', 'l'));
    });

    it('should return an array with the string separated by "l". ', function () {
      expect([]).to.deep.equal(stringFunctions.string_split('lllllll', 'l'));
    });

    it('should return an array with the string separated by space but limited', function () {
      expect(['hello', 'world']).to.deep.equal(stringFunctions.string_split('hello world test', ' ', 2));
    });

  });

});