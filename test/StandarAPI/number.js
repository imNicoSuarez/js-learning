var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;


var numberFunctions = require('../../StandarAPI/number');

describe('Number', function() {
  describe('number_parseInt()', function () {

    it('should return the number of string parsing', function () {
      expect(numberFunctions.number_parseInt('-1')).to.deep.equal(-1);
    });
    it('should return the number of string parsing', function () {
      expect(numberFunctions.number_parseInt('1')).to.deep.equal(1);
    });

    describe('if the string is a rational number', function(){
      it('should return the integer', function () {
        expect(1).to.deep.equal(numberFunctions.number_parseInt('1.9'));
        expect(-1).to.deep.equal(numberFunctions.number_parseInt('-1.9'));
        expect(1).to.deep.equal(numberFunctions.number_parseInt(1.9));
      });
    });

    describe('if the params is not a number', function(){
      it('should return the Not a Number (NaN)', function () {
        expect(NaN).to.deep.equal(numberFunctions.number_parseInt('string'));
        expect(NaN).to.deep.equal(numberFunctions.number_parseInt(null));
      });
    });


  });

  describe('number_parseFloat()', function () {

    it('should return the number of string parsing', function () {
      expect(1).to.deep.equal(numberFunctions.number_parseFloat('1'));
      expect(-1).to.deep.equal(numberFunctions.number_parseFloat('-1'));
    });

    describe('if the string is a rational number', function(){
      it('should return the float', function () {
        expect(1.9).to.deep.equal(numberFunctions.number_parseFloat('1.9'));
        expect(-1.9).to.deep.equal(numberFunctions.number_parseFloat('-1.9'));
      });
    });

    describe('if the params is not a number', function(){
      it('should return the Not a Number (NaN)', function () {
        expect(NaN).to.deep.equal(numberFunctions.number_parseFloat('string'));
        expect(NaN).to.deep.equal(numberFunctions.number_parseFloat(null));
      });
    });
  });

});
