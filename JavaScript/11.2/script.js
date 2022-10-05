// Answer the questions below and use the map or the
// forEach method :

// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the 

function doubleValues(arr) {
  return arr.map(function (num) {
    return num*2 ;
  });
}

const ARR = [1, 2, 3, 4, 5];


// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr){   
  let res= [];
  return arr.forEach(function (i) {
    if (i % 2 === 0){
    res.push(i)
    }
  });
  return res;
}

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

function showFirstAndLast (arr){
  return arr.forEach(i===String)
  return
}

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.


// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.


// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.


// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
