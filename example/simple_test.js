var simpleTest = require('../StandarAPI/errors');


simpleTest.it('tests true is true', function(){
  simpleTest.assertEquals(true, true);
})

simpleTest.it("tests the truth", function() {
  simpleTest.assertEquals(false, true);
});

simpleTest.it("tests true is not false", function() {
  simpleTest.assertNotEquals(false, true);
});

simpleTest.it("tests property access", function() {
  var object = {
    name: 'Some object',
    last_name: 'Smith'
  }

  var last_name = object.full_name.last_name;

  simpleTest.assertEquals('Smith', last_name);
});