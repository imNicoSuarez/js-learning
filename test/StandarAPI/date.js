var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;



var dateFunctions = require('../../StandarAPI/date');

describe('Date', function() {
  describe('date_yesterday()', function () {

    it('should return the previous day from a given date', function () {
      var now = new Date(Date.UTC(2016, 0, 1));

      var yesterday = dateFunctions.date_yesterday(now);

      expect('2015-12-31T00:00:00.000Z').to.deep.equal(yesterday.toISOString());

    });

    it('should return the year of the date given in UTC.', function() {
      var date = new Date(2015, 12, 31, 23);

      var yearUTC = dateFunctions.date_getUTCFullYear(date);

      expect('2016').to.deep.equal(yearUTC.toString());
    })

  });
});