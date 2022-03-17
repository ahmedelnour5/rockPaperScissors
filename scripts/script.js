//generate computer action
let computerPlay = () => {
  let compChoices = ["rock", "paper", "scissors"]; //array storing computer possible actions
  let i = Math.floor(Math.random() * 3);
  let choice = compChoices[i];

  return choice;
};

//prompt player for action

let playRound = (playerSelection, computerSelection) => {
  let winner = "";
  if (playerSelection === computerSelection) {
    winner = "tie";
  } else if (playerSelection > computerSelection) {
    winner = "player";
  } else {
    winner = "computer";
  }

  return winner;
};

let game = () => {
  let scoreBoard = [];
  let playerCount = 0;
  let compCount = 0;
  let tieCount = 0;
  let result = ``;

  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Select your action").toLowerCase();
    scoreBoard.push(playRound(playerSelection, computerSelection));
  }
  //tally score from scoreBoard array
  for (let i = 0; i < scoreBoard.length; i++) {
    if (scoreBoard[i] == "player") {
      playerCount += 1;
    } else if (scoreBoard[i] == "computer") {
      compCount += 1;
    } else {
      tieCount += 1;
    }
  }

  if (playerCount > compCount) {
    result = console.log(`You win! ${playerCount}-${compCount}`);
  } else {
    result = console.log(`You lose! Computer won ${compCount}-${playerCount}`);
  }
  return result;
};

game();
