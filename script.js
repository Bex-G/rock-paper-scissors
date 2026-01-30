const playerDisplay = document.querySelector("#playerDisplay");
const cpDisplay = document.querySelector("#cpDisplay");
const roundDescription = document.querySelector("#roundDescription");
const roundWinner = document.querySelector("#roundWinner");
let playerScore = 0;
let cpScore = 0;

// each string value has a corresponding number --> rock = 0, paper = 1, scissors = 2

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playerNum = 0;
  playerString = "rock";
  runRound(playerNum);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playerNum = 1;
  playerString = "paper";
  runRound(playerNum);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playerNum = 2;
  playerString = "scissors";
  runRound(playerNum);
});

function runRound(playerNum) {
  cpNum = Math.floor(Math.random() * 3); // get random number for comparison
  getCpString(cpNum); // assign a string value to the corresponding random number
  getScore(playerNum, cpNum, playerString, cpString); // compare numbers to determine and display strings
  roundDescription.textContent =
    "You chose " + playerString + ", and your opponent chose " + cpString + "."; // dynamically display cp and player selections
}

function getCpString(cpNum) {
  if (cpNum === 0) {
    return (cpString = "rock");
  } else if (cpNum === 1) {
    return (cpString = "paper");
  } else if (cpNum === 2) {
    return (cpString = "scissors");
  }
}

function getScore(playerNum, cpNum, playerString, cpString) {
  if (playerNum === cpNum) {
    roundWinner.textContent = "It's a tie!";
  } else if (playerNum === 0 && cpNum === 2) {
    playerWins(playerString, cpString);
  } else if (playerNum === 2 && cpNum === 0) {
    cpWins(playerString, cpString);
  } else if (playerNum > cpNum) {
    playerWins(playerString, cpString);
  } else {
    cpWins(playerString, cpString);
  }
  checkForWinner(playerScore, cpScore);
}

function cpWins(playerString, cpString) {
  ++cpScore;
  cpDisplay.textContent = "Computer score: " + cpScore;
  newString =
    cpString + " beats " + playerString + ". Computer wins this round.";
  roundWinner.textContent =
    newString.charAt(0).toUpperCase() + newString.slice(1);
  return cpScore;
}

function playerWins(playerString, cpString) {
  ++playerScore;
  playerDisplay.textContent = "Player score: " + playerScore;
  newString = playerString + " beats " + cpString + ". You win this round!";
  roundWinner.textContent =
    newString.charAt(0).toUpperCase() + newString.slice(1);
  return playerScore;
}

function checkForWinner(playerScore, cpScore) {
  if (playerScore >= 3) {
    alert("You're a winner, baby!");
  } else if (cpScore >= 3) {
    alert("Better luck next time.");
  }
}
