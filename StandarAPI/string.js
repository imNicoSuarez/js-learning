
/*
  Method string_indexOf
*/

// Cambiar el nombre a la variable : valid
function string_indexOf(str, searchValue, fromIndex) {
  var strArry = str.split('');
  var searchValueArry = searchValue.split('');
  var valid = true;
  var count =  typeof fromIndex != 'undefined' ? fromIndex : 0;

  while(valid) {
    if (strArry[count] == searchValueArry[0]) {
      var validStr = str.slice(count, count+searchValue.length);
      if (validStr == searchValue) {
        valid = false;
      } else {
        count++;
      }
    } else {
      count++;

      if(count > strArry.length) {
        count = -1;
        valid = false;
      }
    }
  }

  return count;
}

/*
  Method string_split
*/

// Arreglar nombre de variables
function string_split(str, separator, limit) {
  var indexSep = [0];

  for(var i=0; i< str.length; i++) {
    var indexLimit = indexSep[indexSep.length-1];
    var index = str.indexOf(separator, indexLimit);

    if(index != -1) {
      indexSep.push(index+1);
    }
  }

  var strArry = []
  for (var i = 0; i < indexSep.length; i++) {
    var initCut = indexSep[i];
    var nextCut = indexSep[i+1];

    if (initCut != str.length){
      if (typeof nextCut == 'undefined') {
        nextCut = str.length+1;
      } else {
        nextCut = (nextCut - initCut) > 1 ? nextCut -1 : nextCut;
      }

      var string = str.slice(initCut, nextCut)
      if (string != separator) {
        strArry.push(string);
      }
    }
  }

  return strArry.slice(0,limit);
}



/*
  Definition of exports
*/
exports.string_indexOf = string_indexOf;
exports.string_split = string_split;
