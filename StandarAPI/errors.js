var color = require('colors');

/*
  Define itc
*/
function it(message, callback){
  try {
    callback();
  } catch (e) {
    test = new ControlError(e, message);
    test.message();
  }
}

/*
  Define assert_equals
*/
function assert_equals(expected, actual) {
  if (expected === actual) {
    throw new TestSuccess(expected, actual);
  } else {
    throw new TestError(expected, actual);
  }
}

/*
  Object for centralize Errors
*/
function ControlError(error, description) {
  this.stack = error.stack;
  this.name =  error.name;

  /*
    Get file name of Error
  */
  function getFileName(){
    var dataName = getDataOfStack()[0].split('/');
    return dataName[dataName.length-1];
  }

  /*
    Get line number error
  */
  function getLineNumber(){
    return getDataOfStack()[1];
  }

  /*
    Get information of the stack Error
  */
  function getDataOfStack() {
    return  error.stack.toString()
                       .split('at')[(error instanceof TestError)? 3 : 1]
                       .replace('\n', '')
                       .split(':');
  }

  /*
    Generete messages;
  */
  this.message = function() {
    if (error instanceof TestError) {
      console.log('\n');
      console.log(color.red('failure'));
      console.log(color.red('   expected:', error.expected));
      console.log(color.red('   actual:', error.actual));
      console.log('');
      console.log(color.red('   file:', getFileName()));
      console.log(color.red('   line:', getLineNumber()));
    } else if (error instanceof TestSuccess) {
      console.log(color.green('✓ '), color.gray(description));
    } else {
      console.log('\n');
      console.log(color.red('Error'));
      console.log(color.red('   '+this.name+':', error.message));
      console.log('');
      console.log(color.red('   file:', getFileName()));
      console.log(color.red('   line:', getLineNumber()));
    }
  }
}

/*
  Define Object Test Error
*/
function TestError(expected, actual) {
  this.name = 'TestError';
  this.stack = (new Error()).stack;
  this.expected = expected;
  this.actual = actual;
}
TestError.prototype = Object.create(Error.prototype);
TestError.prototype.constructor = TestError;

/*
  Define Object for Test Success
*/
function TestSuccess(expected, actual) {
  this.name = 'TestSuccess';
  this.stack = ''
}
TestSuccess.prototype.constructor = TestSuccess;


/*
  Definition of exports
*/
exports.it = it;
exports.assert_equals = assert_equals;