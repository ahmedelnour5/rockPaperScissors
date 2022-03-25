//generate computer action
let computerPlay = () => {
  let compChoices = ["rock", "paper", "scissors"]; //array storing computer possible actions
  let i = Math.floor(Math.random() * 3);
  let choice = compChoices[i];

  return choice;
};

//select buttons for player choice
let buttons = document.querySelectorAll(".btn");

//select elements for updating scoreboard
let homeScore = document.querySelector(".home-score");
let awayScore = document.querySelector(".away-score");
let display = document.querySelector(".score-board-display");

//declare player and computer score variables
let playerScore = 0;
let compScore = 0;
let playing = true;

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
  if (playerScore == 5 || compScore == 5) {
    display.innerText = "GAME OVER";
  }
};
