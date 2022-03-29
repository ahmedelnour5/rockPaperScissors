//generate computer action
let computerPlay = () => {
  let compChoices = ["rock", "paper", "scissors"]; //array storing computer possible actions
  let i = Math.floor(Math.random() * 3);
  let choice = compChoices[i];

  return choice;
};

//select buttons for player choice
let buttons = document.querySelectorAll(".btn");

//player score on scoreBoard
let homeScore = document.querySelector(".home-score");
//computer score
let awayScore = document.querySelector(".away-score");
//div to display results of each round
let display = document.querySelector(".score-board-display");

//declare player and computer score variables
let playerScore = 0;
let compScore = 0;

//compare player and computer selections update score of winner
let playRound = (playerSelection, computerSelection) => {
  let result = ``;
  if (playerSelection === computerSelection) {
    result = `Tie ${playerSelection} equals ${computerSelection}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result = `LFG!! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
    homeScore.innerText = playerScore.toLocaleString();
  } else {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    compScore += 1;
    awayScore.innerText = compScore.toLocaleString();
  }
  display.innerHTML = result;
  return checkScore(playerScore, compScore);
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let computerSelection = computerPlay();
    let playerSelection = button.innerHTML.toLowerCase();
    playRound(playerSelection, computerSelection);
  });
});

let checkScore = (playerScore, compScore) => {
  if (playerScore == 5) {
    display.innerText = "YOU WIN!!";
    gameOver();
  } else if (compScore == 5) {
    display.innerText = "GAME OVER YOU LOSE!";
    gameOver();
  }
};

//select elements to hide once game over
let header = document.querySelector(".main-header");
let playAgainButton = document.querySelector(".play-again");
let instructionsContainerElem = document.querySelector(".instructions");
let scoreBoardElem = document.querySelector(".scoreBoard");

let gameOver = () => {
  //hide header
  header.classList.add("hide");
  //hide buttons
  buttons.forEach((button) => {
    button.classList.add("hide");
  });
  instructionsContainerElem.classList.add("hide");
  playAgainButton.classList.remove("hideButton");
  scoreBoardElem.classList.add("hide");
};

let resetState = () => {
  buttons.forEach((button) => {
    button.classList.remove("hide");
  });

  header.classList.remove("hide");
  instructionsContainerElem.classList.remove("hide");
  scoreBoardElem.classList.remove("hide");
  display.classList.remove("hide");
  playAgainButton.classList.add("hideButton");
  compScore = 0;
  playerScore = 0;
  awayScore.innerText = compScore.toLocaleString();
  homeScore.innerText = playerScore.toLocaleString();
  display.innerText = ``;
};

playAgainButton.addEventListener("click", resetState);
