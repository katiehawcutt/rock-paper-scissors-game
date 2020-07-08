var playerScore = 0;
var computerScore = 0;
var scoreBoard = document.getElementById("score");
var gameRound = 0;
var gamePlay = 0;
var button = document.getElementById("button");
var person;

function playButton() {
  if (gamePlay == 0) {
    person = prompt("Please enter your name:");
    alert("Hello " + person + " ! Best of three...");
  } else {
    updateScoreBoard();
    alert("Are you ready for another game " + person + "? Best of three...");
  }
}

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
    alert("You draw! You both played the same!");
  } else if (playerMove == "rock") {
    if (computerMove == "paper") {
      alert("You lose! Computer played paper!");
      computerScore++;
    } else {
      alert("You win! Computer played scissors!");
      playerScore++;
    }
  } else if (playerMove == "scissors") {
    if (computerMove == "rock") {
      alert("You lose! Computer played rock!");
      computerScore++;
    } else {
      alert("You win! Computer played paper!");
      playerScore++;
    }
  } else if (playerMove == "paper") {
    if (computerMove == "rock") {
      alert("You win! Computer played rock!");
      playerScore++;
    } else {
      alert("You lose! Computer played scissors!");
      computerScore++;
    }
  }
}

function getGameOutcome() {
  var gameOutcome;
  if (playerScore > computerScore) {
    gameOutcome = "WINNER!";
  } else if (playerScore < computerScore) {
    gameOutcome = "You lost this time!";
  } else if (playerScore == computerScore) {
    gameOutcome = "It's a draw!";
  }
  return gameOutcome;
}

function updateScoreBoard() {
  scoreBoard.innerHTML =
    person + ": " + playerScore + " Computer:" + computerScore;
}

function countRounds(gameOutcome) {
  gameRound++;
  gamePlay++;
  updateScoreBoard();
  if (gameRound <= 2) {
  } else {
    alert(
      "Game Over! " +
        gameOutcome +
        " You scored " +
        playerScore +
        "! Computer scored " +
        computerScore
    );
    button.innerHTML = "Play again!";
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
  }
}
//how the games runs
function game(playerMove) {
  var computerMove = generateComputerMove();
  compareScore(playerMove, computerMove);
  var gameOutcome = getGameOutcome();
  updateScoreBoard();
  countRounds(gameOutcome);
}
