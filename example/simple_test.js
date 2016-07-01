var simpleTest = require('../StandarAPI/errors');


simpleTest.it('tests true is true', function(){
  simpleTest.assert_equals(true, true);
})

simpleTest.it("tests the truth", function() {
  simpleTest.assert_equals(false, true);
});

simpleTest.it("tests property access", function() {
  var object = {
  name: 'Some object',
  last_name: 'Smith'
  }

  var last_name = object.full_name.last_name;

  simpleTest.assert_equals('Smith', last_name);
});