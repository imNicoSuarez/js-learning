/*
  Method number_parseInt
*/
function number_parseInt(string) {
  if (typeof string === 'string') {
    var stringNumber = string.split('.')[0];
    return Number(stringNumber);
  }

  return NaN;
}

/*
  Method number_parseFloat
*/
function number_parseFloat(string) {
  if (typeof string === 'string') {
    return Number(string);
  }

  return NaN
}


/*
  Definition of exports
*/
exports.number_parseInt = number_parseInt;
exports.number_parseFloat = number_parseFloat;
