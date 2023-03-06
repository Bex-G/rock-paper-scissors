// For computerSelection: 0 = "rock," 1 = "paper," 2 = "scissors." //

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === "rock" && computerSelection === 1) {
        console.log ("score: " + playerScore + " | " + ++computerScore);
        return ("Paper beats rock. You lose.");
    } else if (playerSelection === "rock" && computerSelection === 2) {
        console.log ("score: " + ++playerScore + " | " + computerScore);
        return ("Rock beats scissors. You win!");
    } else if (playerSelection === "paper" && computerSelection === 0) {
        console.log ("score: " + ++playerScore + " | " + computerScore);
        return ("Paper beats rock. You win!");
    } else if (playerSelection === "paper" && computerSelection === 2) {
        console.log ("score: " + playerScore + " | " + ++computerScore);
        return ("Scissors beat paper. You lose.");
    } else if (playerSelection === "scissors" && computerSelection === 0) {
        console.log ("score: " + playerScore + " | " + ++computerScore);
        return ("Rock beats scissors. You lose.");
    } else if (playerSelection === "scissors" && computerSelection === 1) {
        console.log ("score: " + ++playerScore + " | " + computerScore);
        return ("Scissors beat paper. You win!");
    } else console.log ("score: " + playerScore + " | " + computerScore);
        return ("It's a tie! Try again?");
}

function finalScore () {
    
    if (playerScore > computerScore) {
        console.log ("Congrats, you won the game!")
    } else if (playerScore < computerScore) {
        console.log ("Better luck next time.")
    } else if (playerScore = computerScore) {
        console.log ("It's a tie! Good game. :)")
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("So what'll it be? Rock, paper or scissors?").toLowerCase();

        computerSelection = Math.floor(Math.random() * 3);

        console.log(playRound(playerSelection, computerSelection));
    } 
    console.log(finalScore());
}