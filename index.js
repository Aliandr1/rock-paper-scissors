const userChoice = prompt('Choose rock paper or scissors');

const choiceOne = 'rock';
const choiceTwo = 'paper';
const choiceThree = 'scissors';

function getComputerChoice(one, two, three) {
 let random = Math.random()
   if(random <= 0.34) {
    return 'rock';
   } else if(random <= 0.67) {
    return 'paper'
   } else {
    return 'scissors';
   }
   
}

 
const computerChoice = getComputerChoice(choiceOne, choiceTwo, choiceThree);
 


if(userChoice === 'rock' && computerChoice === 'rock') {
    console.log("It's a draw. Play again");
    prompt('Choose rock paper or scissors');
} else if(userChoice === 'rock' && computerChoice === 'scissors') {
     console.log('Rock beats scissors! You win');
} else if(userChoice === 'rock' && computerChoice === 'paper') {
    console.log('Paper beats rock! You lose');
}    else if(userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Rock beats scissors! You lose');
 } else if(userChoice === 'scissors' && computerChoice === 'paper') {
    console.log('Scissors beat paper! You win');
 } else if(userChoice === 'scissors' && computerChoice === 'scissors') {
    console.log("It's a draw. Play again");
 } else if(userChoice === 'paper' && computerChoice === 'rock') {
    console.log('Paper beats rock! You win');
 } else if(userChoice === 'paper' && computerChoice === 'scissors') {
    console.log('Scissors beat paper! You lose');
 } else if(userChoice === 'paper' && computerChoice === 'paper') {
    console.log("It's a draw. Play again");
 } 

console.log(userChoice, computerChoice);

