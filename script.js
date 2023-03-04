// For computerSelection: 0 = "rock," 1 = "paper," 2 = "scissors." //

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === "rock" && computerSelection === 1) {
        return ("Paper beats rock. You lose.");
    } else if (playerSelection === "rock" && computerSelection === 2) {
        return ("Rock beats scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection === 0) {
        return ("Rock beats paper. You lose.");
    } else if (playerSelection === "paper" && computerSelection === 2) {
        return ("Scissors beat paper. You lose.");
    } else if (playerSelection === "scissors" && computerSelection === 0) {
        return ("Rock beats scissors. You lose.");
    } else if (playerSelection === "scissors" && computerSelection === 1) {
        return ("Scissors beat paper. You win!");
    } else return("It's a tie! Try again?");
}

function score() {
    
    let playerScore = 0;
    let computerScore = 0;

    if (playRound(playerSelection, computerSelection).endsWith("!")) {
        return "score: " + ++playerScore + " " + computerScore;
    } else if (playRound(playerSelection, computerSelection).endsWith(".")) {
        return "score: " + playerScore + " " + ++computerScore;
    } else if (playRound(playerSelection, computerSelection).endsWith("?")) {
        return "score: " + playerScore + " " + +computerScore;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("So what'll it be? Rock, paper or scissors?").toLowerCase();

        computerSelection = Math.floor(Math.random() * 3);

        return [playRound(playerSelection, computerSelection), score()]
    }
}