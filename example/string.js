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


console.log(string_split('hello world', ' '));
console.log(string_split('hello llllll', 'l'));
console.log(string_split('hello world hello world hello world', ' ', 1));