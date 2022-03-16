let computerPlay = () => {
  let compChoices = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * 3);
  let choice = compChoices[i];

  return choice;
};

console.log(computerPlay());
