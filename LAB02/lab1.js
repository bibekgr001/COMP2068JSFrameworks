// lab1.js
// Rock-Paper-Scissors Game in Node.js

const prompt = require("prompt");

// Start the prompt
prompt.start();

// Ask the user to choose ROCK, PAPER, or SCISSORS
prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error("Error:", err);
    return;
  }

  // Store user input and convert to uppercase
  const userSelection = result.userSelection.toUpperCase();

  // Generate computer's choice using Math.random()
  const randomNum = Math.random();
  let computerSelection = "";

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  // Display selections
  console.log("User Selection:", userSelection);
  console.log("Computer Selection:", computerSelection);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
