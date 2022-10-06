// Write a JavaScript function that receives the following library
// object as an input and displays the books that can be read (the
// reading status is true).
// Log the book name, author name, and reading status.

const library = [
  {
    author: "Saul Singer ,Dan Senor",
    title: "start up nation",
    readingStatus: true,
  },
  {
    author: "Napoleon Hill",
    title: "think and grow rich",
    readingStatus: true,
  },
  {
    author: "George Samuel Clason",
    title: "richest man in babylon",
    readingStatus: false,
  },
];

function displayBooks(arr) {
  arr.forEach(function (b) {
    if (b.readingStatus == true) {
      console.log(`${b.title} by ${b.author} is available for reading!`);
    }
  });
}
displayBooks(library);
