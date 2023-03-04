// For computerSelection: 0 = "rock," 1 = "paper," 2 = "scissors." //


playerSelection = prompt("So what'll it be? Rock, paper or scissors?").toLowerCase();

computerSelection = Math.floor(Math.random() * 3);

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === "rock" && computerSelection === 1) {
        return("Paper beats rock. You lose!");
    } else if (playerSelection === "rock" && computerSelection === 2) {
        return("Rock beats scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection === 0) {
        return("Rock beats paper. You lose!");
    } else if (playerSelection === "paper" && computerSelection === 2) {
        return("Scissors beat paper. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === 0) {
        return("Rock beats scissors. You lose!");
    } else if (playerSelection === "scissors" && computerSelection === 1) {
        return("Scissors beat paper. You win!");
    } else return("It's a tie! Try again.");
}