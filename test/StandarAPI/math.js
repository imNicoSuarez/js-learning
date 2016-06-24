require('../spec_helper');

var chai = require('chai');

var assert =  chai.assert,
    expect =  chai.expect;


requirejs(['../StandarAPI/math.js'], function(math){

  describe('Math', function() {
    describe('graphSinX()', function () {

      it('should return an array ', function () {
        expect(math.graphSinX(1)).that.is.an('array');
      });

      it('should return an array with arrays ', function () {
        expect(math.graphSinX(1)[0]).that.is.an('array');
      });

      it('should return an array of arrays with values where x is between -10 and 10', function () {
        expect(math.graphSinX(1)[0][0]).to.within(-10,10);
      });

      it('should return an array of arrays with values where y is between -1 and 1', function () {
        expect(math.graphSinX(1)[0][1]).to.within(-1,1);
      });

    });
  });
});

