// ● Order Of Operation
// ● If statements
// Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored  points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws

function average(a, b, c) {
  return (a + b + c) / 3;
}

let john = average(89, 120, 103);
let mike = average(116, 94, 123);

if (john > mike) {
  console.log(`the winner is john with the score of ${john}`);
} else if (john < mike) {
  console.log(`the winner is mike with the score of ${mike}`);
}

mike = average(80, 94, 123);

if (john > mike) {
  console.log(`the winner is john with the score of ${john}`);
} else if (john < mike) {
  console.log(`the winner is mike with the score of ${mike}`);
} else {
  console.log(`its a tie`);
}

let mary = average(97, 134, 105);
