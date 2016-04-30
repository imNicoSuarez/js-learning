/*
  Method date_yesterday
*/
function date_yesterday(date) {
  return new Date(date.getTime()-(86400000))
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
  Definition of exports
*/
exports.date_yesterday = date_yesterday;
exports.date_getUTCFullYear = date_getUTCFullYear;


