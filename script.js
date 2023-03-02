let arr = ["rock", "paper", "scissors"];

// Generate random number. //

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * arr.length);
}

// Assign random number to array value. //

let computerchoice = getComputerChoice(0, 2);

if (computerchoice === 0) {
    computerSelection = arr[0];
  } else if (computerchoice === 1) {
    computerSelection = arr[1];
  } else if (computerchoice === 2) {
    computerSelection = arr[2];
  }

// Prompt player for input. //

let answer = prompt("So what'll it be? Rock, paper or scissors?");
  
// Make player input case-insensitive //

function makeLowerCase(answer) {
    return answer.toLowerCase();
}

let playerChoice = makeLowerCase(answer)

// Assign player's answer to an array value. //

if (playerChoice === "rock") {
    playerSelection = arr[0];
  } else if (playerChoice === "paper") {
    playerSelection = arr[1];
  } else if (playerChoice === "scissors") {
    playerSelection = arr[2];
  }

// Compare player and computer selections. //

function game(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
        alert("It's a tie! Try again.");
    } else if (playerSelection === arr[0] && computerSelection === arr[1]) {
        alert("Paper beats rock. You lose!");
    } else if (playerSelection === arr[0] && computerSelection === arr[2]) {
        alert("Rock beats scissors. You Win!");
    } else if (playerSelection === arr[1] && computerSelection === arr[0]) {
        alert("Rock beats paper. You lose!");
    } else if (playerSelection === arr[1] && computerSelection === arr[2]) {
        alert("Scissors beat paper. You lose!");
    } else if (playerSelection === arr[2] && computerSelection === arr[0]) {
        alert("Rock beats scissors. You lose!");
    } else if (playerSelection === arr[2] && computerSelection === arr[1]) 
        alert("Scissors beat paper. You win!");
    }