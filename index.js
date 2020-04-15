//variables
var playerScore = 0;
var computerScore = 0;
var scoreBoard = document.getElementById("score");
var gameRound = 0;
var gameOutcome;
var button = document.getElementById("button");
var person;

//the PLAY button
function playButton() {
  person = prompt("Please enter your name:");
  if (person != null) {
    alert("Hello " + person + " ! Best of three...");
  }
}

//how the games runs
function game(playerMove) {
  // computer moves
  var computerMove = Math.floor(Math.random() * 3);
  if (computerMove == 0) {
    computerMove = "rock";
  } else if (computerMove == 1) {
    computerMove = "paper";
  } else computerMove = "scissors";
  console.log(computerMove);

  //player moves
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
  // Game Outcome
  if (playerScore > computerScore) {
    gameOutcome = "WINNER!";
  } else if (playerScore < computerScore) {
    gameOutcome = "You lost this time!";
  } else if (playerScore == computerScore) {
    gameOutcome = "It's a draw!";
  }
  //scoreboard
  scoreBoard.innerHTML =
    person + ": " + playerScore + " Computer:" + computerScore;

  //game round and end of game
  gameRound++;
  if (gameRound <= 2) {
  } else {
    alert("Game Over! " + gameOutcome + " You scored " + playerScore + "!");
    button.innerHTML = "Play again!";
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
  }

  console.log(playerScore);
}
