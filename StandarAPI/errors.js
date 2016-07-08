var color = require('colors');

/*
  Define it
*/
function it(message, callback){
  try {
    callback();
    printTestResult({description: message});
  } catch (e) {
    test = new ControlError(e, message);
    printTestResult(test);
  }
}

/*
  Define assertEquals
*/
function assertEquals(expected, actual) {
  if (expected !== actual) {
    throw new TestError(expected, actual);
  }
}

/*
  Define assertNotEquals
*/
function assertNotEquals(expected, actual) {
  if (expected === actual) {
    throw new TestError(expected, actual);
  }
}

/*
  Object for centralize Errors
*/
function ControlError(error, description) {
  this.error = error;
  this.description = description;
}

/*
  Get information of the stack Error
*/
ControlError.prototype.getDataOfStack = function() {
  return  this.error.stack.toString()
                    .split('at')[(this.error instanceof TestError)? 3 : 1]
                    .replace('\n', '')
                    .split(':');
}

/*
  Get file name of Error
*/
ControlError.prototype.getFileName = function(){
  var dataName = this.getDataOfStack()[0].split('/');
  return dataName[dataName.length-1];
}

/*
  Get line number error
*/
ControlError.prototype.getLineNumber = function(){
  return this.getDataOfStack()[1];
}

/*
  Generete messages;
*/
function printTestResult(object) {
  var LEVEL_TWO = '\t\u0020\u0020';

  console.log('');
  if (object instanceof ControlError) {
    console.log(color.red('x ').bold, color.red(object.description));
    if (object.error instanceof TestError) {
      console.log(color.red('\tfailure'));
      console.log(color.red(LEVEL_TWO+'expected:', object.error.expected));
      console.log(color.red(LEVEL_TWO+'actual:', object.error.actual));
      console.log('');
      console.log(color.red(LEVEL_TWO+'file:', object.getFileName()));
      console.log(color.red(LEVEL_TWO+'line:', object.getLineNumber()));
    } else {
      console.log(color.red('\tError'));
      console.log(color.red(LEVEL_TWO+''+object.error.name+':', object.error.message));
      console.log('');
      console.log(color.red(LEVEL_TWO+'file:', object.getFileName()));
      console.log(color.red(LEVEL_TWO+'line:', object.getLineNumber()));
    }
  } else {
    console.log(color.green('✓ '), color.gray(object.description));
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
  Definition of exports
*/
exports.it = it;
exports.assertEquals = assertEquals;
exports.assertNotEquals = assertNotEquals;