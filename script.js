let arr = ["rock", "paper", "scissors"];

// Generate random number. //

getComputerChoice = Math.floor(Math.random() * arr.length);

// Assign random number to array value. //

let computerchoice = getComputerChoice;

if (computerchoice === 0) {
    computerSelection = arr[0];
  } else if (computerchoice === 1) {
    computerSelection = arr[1];
  } else if (computerchoice === 2) {
    computerSelection = arr[2];
  }

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
        return("It's a tie! Try again.");
    } else if (playerSelection === "rock" && computerSelection === arr[1]) {
        return("Paper beats rock. You lose!");
    } else if (playerSelection === "rock" && computerSelection === arr[2]) {
        return("Rock beats scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection === arr[0]) {
        return("Rock beats paper. You lose!");
    } else if (playerSelection === "paper" && computerSelection === arr[2]) {
        return("Scissors beat paper. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === arr[0]) {
        return("Rock beats scissors. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === arr[1]) 
        return("Scissors beat paper. You win!");
    }

    
    
    // Prompt player for input. //

let playerSelection = prompt("So what'll it be? Rock, paper or scissors?").toLowerCase();

