// const food = ["Noodle", "Pasta", "Ice-cream",
// "Meat", "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza",
// "Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false

for (let i = 0; i < food.length; i++) {
  console.log(i);
}
for (let j = 0; j < food1.length; j++) {
  console.log(j);
}

function foodCompare(food, food1) {
  if (i === j) {
    return "items that are the same";
  } else {
    return "false";
  }
}
