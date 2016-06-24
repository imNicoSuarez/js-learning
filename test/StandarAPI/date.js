var chai = require('chai');


var assert =  chai.assert,
    expect =  chai.expect;



var dateFunctions = require('../../StandarAPI/date');

describe('Date', function() {
  describe('date_yesterday()', function () {

    it('should return the previous day from a given date', function () {
      var now = new Date(Date.UTC(2016, 0, 1));

      var yesterday = dateFunctions.date_yesterday(now);

      expect(yesterday.toISOString()).to.deep.equal('2015-12-31T00:00:00.000Z');

    });

  });

  describe('date_getUTCFullYear()', function () {

    it('should return the year of the date given in UTC.', function() {
      var date = new Date(2015, 12, 31, 23);

      var yearUTC = dateFunctions.date_getUTCFullYear(date);

      expect(yearUTC.toString()).to.deep.equal('2016');
    })

  });


  describe('date_diffInDays()', function () {

    it('should returns 0 if the day is the same', function() {
      var today = Date.now();

      var diff = dateFunctions.date_diffInDays(today, today);

      expect(diff).to.deep.equal(0);
    })

    it('should return the difference between days', function() {
      var today = new Date();
      var yesterday = dateFunctions.date_yesterday(today);

      var diff = dateFunctions.date_diffInDays(today, yesterday);
      var diff2 = dateFunctions.date_diffInDays(yesterday, today);

      expect(diff).to.deep.equal(1);
      expect(diff2).to.deep.equal(1);
    });

  });
});

