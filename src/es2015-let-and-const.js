// Global
// Act the same
var x = 'Hello';
x = 3;
let y = 'Hello';
y = 3;

// Function
function varandlet() {
  var x = 'Hello';
  x = 3;
  let y = 'Hello';
  y = 3;
}

// let is the new var?
// In for statement
function forvarfun() {
  for (var i = 0; i< 10; i+= 1){
    // Some code
  }

  console.log(i); // Will print 10
}

forvarfun();

function forletfun() {
  for (let i = 0; i< 10; i+= 1){
    // Some code
  }

  /// console.log(i); // Will fail
}

forletfun();

// Inside strict context
function myvarfun() {
  'use strict';
  var x = 3;
  var x = "hello"; // Valid
}

function myletfun() {
  'use strict';
  let x = 3;
  // let x = "hello"; // Not valid, in a 'use strict' context
}
