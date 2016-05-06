var ONEDAY = 86400000;

/*
  Method date_yesterday
*/
function date_yesterday(date) {
  return new Date(date - ONEDAY);
}

/*
  Method date_getUTCFullYear
*/
function date_getUTCFullYear(date) {
  var newDate = new Date(Date.UTC(date.getFullYear(),
                                  date.getMonth(),
                                  date.getDate(),
                                  date.getHours(),
                                  date.getSeconds()));

  return newDate.getFullYear();
}


/*
  Method date_diffInDays
*/
function date_diffInDays(date1, date2) {
  var diffTime = date1 - date2;
  var diffDay = Math.ceil(diffTime / ONEDAY);

  var diff = (diffDay < 0)? (diffDay * -1) : diffDay;

  return diff;
}

/*
  Definition of exports
*/
exports.date_yesterday = date_yesterday;
exports.date_getUTCFullYear = date_getUTCFullYear;
exports.date_diffInDays = date_diffInDays;


