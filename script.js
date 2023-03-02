let arr = ["rock", "paper", "scissors"];

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * arr.length);
}

let choice = getComputerChoice(0, 2);

if (choice === 0) {
    computerSelection = arr[0];
  } else if (choice === 1) {
    computerSelection = arr[1];
  } else if ( choice === 2) {
    computerSelection = arr[2];
  }

let playerSelection = prompt("So what'll it be? Rock, paper or scissors?")

function game(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert("It's a tie! Try again.");
    } else if (playerSelection === arr[1] && computerSelection === arr[2]) {
        alert("Paper beats rock. You Win!");
    } else if (playerSelection === arr[1] && computerSelection === arr[3]) {
        alert("Rock beats scissors. You Win!");
    } else if (playerSelection === arr[2] && computerSelection === arr[1]) {
        alert("Rock beats paper. You lose!");
    } else if (playerSelection === arr[2] && computerSelection === arr[3]) {
        alert("Scissors beat paper. You lose!");
    } else if (playerSelection === arr[3] && computerSelection === arr[1]) {
        alert("Rock beats scissors. You lose!");
    } else if (playerSelection === arr[3] && computerSelection === arr[2]) 
        alert("Scissors beat paper. You win!");
    }