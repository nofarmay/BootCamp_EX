// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.

// 1.
function isString(str, cabFun) {
  if (typeof str === "string") {
  }
}
function cabFun(str) {
  console.log(str);
}
isString("NOF", cabFun);

// 2.
function firstWordUpperCase(str, cabFun) {
  let e = str.charAt(0).toUpperCase() + str.slice(1);
}

function cabFun1(str) {
  let result = str.replaceAll(" ", "-");
  console.log(result);
}

// 3.
function nofar(str) {
  console.log(str);
}

firstWordUpperCase("vdxffs", nofar);

// 4.
function myFunc(str, cbf) {
  console.log(hi);
}

function myCbf(str) {
  console.log(world);
}
