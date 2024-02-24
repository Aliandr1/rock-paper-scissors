let userChoice;

const choiceOne = "rock";
const choiceTwo = "paper";
const choiceThree = "scissors";

function getComputerChoice(one, two, three) {
  let random = Math.random();
  if (random <= 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

const computerChoice = getComputerChoice(choiceOne, choiceTwo, choiceThree);

let userScore = 0;
let computerScore = 0;

function playRound(a, b) {
  if (userChoice === "rock" && computerChoice === "rock") {
    console.log(`It's a draw! Play again ${userScore} vs ${computerScore}`);
    return [userScore, computerScore];
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log(
      `Rock beats scissors! You win ${++userScore} vs ${computerScore}`
    );
    return [userScore, computerScore];
  } else if (userChoice === "rock" && computerChoice === "paper") {
    console.log(
      `Paper beats rock! You lose ${userScore} vs ${++computerScore}`
    );
    return [userScore, computerScore];
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log(
      `Rock beats scissors! You lose ${userScore} vs ${++computerScore}`
    );
    return [userScore, computerScore];
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log(
      `Scissors beat paper! You win ${++userScore} vs ${computerScore}`
    );
    return [userScore, computerScore];
  } else if (userChoice === "scissors" && computerChoice === "scissors") {
    console.log(`It's a draw. Play again ${userScore} vs ${computerScore}`);
    return [userScore, computerScore];
  } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log(`Paper beats rock! You win ${++userScore} vs ${computerScore}`);
    return [userScore, computerScore];
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log(
      `Scissors beat paper! You lose ${userScore} vs ${++computerScore}`
    );
    return [userScore, computerScore];
  } else if (userChoice === "paper" && computerChoice === "paper") {
    console.log(`It's a draw. Play again ${userScore} vs ${computerScore}`);
    return [userScore, computerScore];
  }
}

for (let i = 0; i < 3; i++) {
  userChoice = prompt("Choose rock paper or scissors");
  console.log(playRound(userChoice, computerChoice));
}

while (userScore === computerScore) {
  userChoice = prompt("Choose rock paper or scissors");
  console.log(playRound(userChoice, computerChoice));
}

if (userScore > computerScore) {
  console.log("You won the game! CONGRATULATIONS!!!");
} else {
  console.log("You lost the game :( Try again maybe");
}
