//GAME VARIABLES
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let person;
let roundOutcome;
let gameOutcome;
let comment;

//BOARDS
const scoreBoard = document.querySelector("#score");
const gameRoundDisplay = document.querySelector("#round");

//BUTTONS
const playButton = document.querySelector("#playButton");
const closeButton = document.querySelector("#closePopUp");
const playAgainButton = document.querySelector("#playAgain");
const quitButton = document.querySelector("#refreshPage");
const startGameButton = document.querySelector("#startGame");
const okayButton = document.querySelector("#okay");

//POP UP BOXES
const popUpBox1 = document.querySelector("#popUpBox1");
const popUpBox2 = document.querySelector("#popUpBox2");
const miniPopUpBox = document.querySelector("#miniPopUpBox");
const body = document.querySelector("body");

//UPDATING OTHER TEXT
const userName = document.querySelector("#userName");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameOutcome");
const gameComment = document.querySelector("#gameComment");
const gameScore = document.querySelector("#gameScore");

//START GAME

function startGame() {
  if (userName.value === "") {
    person = "Player";
  } else {
    person = userName.value;
  }
  popUpBox1.style.display = "none";
  body.classList.remove("background-opacity");
  gameRound++;
  updateBoards();
  playButton.style.display = "none";
}

//GAME FUNCTIONALITY

function generateComputerMove() {
  var computerMove = Math.floor(Math.random() * 3);
  if (computerMove == 0) {
    computerMove = "rock";
  } else if (computerMove == 1) {
    computerMove = "paper";
  } else computerMove = "scissors";
  return computerMove;
}
function compareScore(playerMove, computerMove) {
  if (playerMove == computerMove) {
    roundOutcome = "You draw! You both played the same!";
    displayResult();
  } else if (playerMove == "rock") {
    if (computerMove == "paper") {
      roundOutcome = "You lose! Computer played paper!";
      computerScore++;
      playerScore--;
      displayResult();
    } else {
      roundOutcome = "You win! Computer played scissors!";
      playerScore++;
      computerScore--;
      displayResult();
    }
  } else if (playerMove == "scissors") {
    if (computerMove == "rock") {
      roundOutcome = "You lose! Computer played rock!";
      computerScore++;
      playerScore--;
      displayResult();
    } else {
      roundOutcome = "You win! Computer played paper!";
      playerScore++;
      computerScore--;
      displayResult();
    }
  } else if (playerMove == "paper") {
    if (computerMove == "rock") {
      roundOutcome = "You win! Computer played rock!";
      playerScore++;
      computerScore--;
      displayResult();
    } else {
      roundOutcome = "You lose! Computer played scissors!";
      computerScore++;
      playerScore--;
      displayResult();
    }
  }
}

function displayResult() {
  miniPopUpBox.style.display = "flex";
  body.classList.add("background-opacity");
  roundResult.innerText = roundOutcome;
}

function closeMiniPopUp() {
  if (gameRound <= 3) {
    miniPopUpBox.style.display = "none";
    body.classList.remove("background-opacity");
    updateBoards();
  } else {
    miniPopUpBox.style.display = "none";
    body.classList.remove("background-opacity");
    endOfGamePopUp();
  }
}

function getGameOutcome() {
  if (playerScore > computerScore) {
    gameOutcome = "WINNER!";
    comment = "Awesome work! You reign over the computer bots!";
  } else if (playerScore < computerScore) {
    gameOutcome = "You lost this time!";
    comment = "Those computer bots beat you. Better luck next time!";
  } else if (playerScore == computerScore) {
    gameOutcome = "It's a draw!";
    comment = "You and the bots are neck and neck. Fancy another go?";
  }
  return gameOutcome;
}

function updateBoards() {
  scoreBoard.innerText = `${person}: ${playerScore} Computer: ${computerScore}`;
  gameRoundDisplay.innerText = `Round: ${gameRound}`;
}

function countRounds(gameOutcome) {
  gameRound++;
  if (gameRound > 3) {
    gameRoundDisplay.innerText = `Round: 3`;
  }
}

function game(playerMove) {
  var computerMove = generateComputerMove();
  compareScore(playerMove, computerMove);
  var gameOutcome = getGameOutcome();
  updateBoards();
  countRounds(gameOutcome);
}

//END OF GAME

function endOfGamePopUp() {
  popUpBox2.style.display = "flex";
  body.classList.add("background-opacity");
  gameResult.innerText = gameOutcome;
  gameScore.innerText = `${person}: ${playerScore} Computer: ${computerScore}`;
  gameComment.innerText = comment;
}

function playAgain() {
  popUpBox2.style.display = "none";
  body.classList.remove("background-opacity");
  playButton.style.display = "none";
  playerScore = 0;
  computerScore = 0;
  gameRound = 1;
  updateBoards();
}

function refreshForNewPlayer() {
  popUpBox2.style.display = "none";
  body.classList.remove("background-opacity");
  playButton.style.display = "flex";
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;
  person = "Player";
  updateBoards();
}

//EVENT LISTENERS

playButton.addEventListener("click", () => {
  popUpBox1.style.display = "flex";
  body.classList.add("background-opacity");
});

closeButton.addEventListener("click", () => {
  popUpBox1.style.display = "none";
  body.classList.remove("background-opacity");
});

okayButton.addEventListener("click", closeMiniPopUp);
startGameButton.addEventListener("click", startGame);
quitButton.addEventListener("click", refreshForNewPlayer);
playAgainButton.addEventListener("click", playAgain);
