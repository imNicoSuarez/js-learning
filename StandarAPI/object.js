
/*
  Method object_equal
*/
function object_equal(obj1, obj2) {
  return  JSON.stringify(obj1) == JSON.stringify(obj2);
}

/*
  Method object_includes
*/
function object_includes(obj1, obj2) {
  return 'Not Implemented'
}


/*
  Definition of exports
*/
exports.object_equal = object_equal;
exports.object_includes = object_includes;
