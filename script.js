let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
    computerSelection = "rock";
    } else if (randomNumber === 1) {
    computerSelection = "paper";
    } else if (randomNumber === 2) {
    computerSelection = "scissors";
    }
}

//Plays one round and returns score for each button click event.

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    getComputerSelection();
    playRound("rock", computerSelection);
    gamePlay("Rock");
    scoreKeeper();
    finalScore();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    getComputerSelection();
    playRound("paper", computerSelection);
    gamePlay("Paper");
    scoreKeeper();
    finalScore();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    getComputerSelection();
    playRound("scissors", computerSelection);
    gamePlay("Scissors");
    scoreKeeper();
    finalScore();
});


function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
    }
}

function gamePlay(playerSelection) { //Records selections as readable text.

    const game = document.querySelector('#game');
    
    const gameContent = document.querySelector('#gameP');
    gameContent.classList.add('content');
    gameContent.textContent = playerSelection + " vs " + computerSelection + "!"
    
    game.appendChild(gameContent);
}

function scoreKeeper() { //Displays score totals.

    const score = document.querySelector('#score');
    
    const scoreContent = document.querySelector('h3');
    scoreContent.classList.add('content');
    scoreContent.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
    
    score.appendChild(scoreContent);
}

function finalScore() {
    if (playerScore === 5) {
        alert("Congrats, you won the game!")
    } else if (computerScore === 5) {
        alert("Better luck next time.")
    }
}