function getHumanChoice(){
  let humanPlayer = prompt(`Rock, Paper or Scissors?`).toLowerCase();

  if (humanPlayer === `rock`) {
    console.log(`You choose Rock!`);
    return `rock`;
  } else if (humanPlayer === `paper`) {
    console.log(`You choose Paper!`);
    return `paper`;
  } else {
    console.log(`You choose Scissors!`);
    return `scissors`;
  }
}
const humanChoice = getHumanChoice();


function getComputerChoice(){
  let computerPlayer = Math.random() 

  if (computerPlayer < 0.34) {
    console.log(`CPU choose Rock!`);
    return (`rock`);
  } else if 
    (computerPlayer >= 0.34 && computerPlayer < 0.67) {
      console.log(`CPU choose Paper!`);
      return (`paper`)
    }
  else {
    console.log(`CPU choose Scissors!`);
    return (`scissors`)
  }
}
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a draw! Both choose ${humanChoice}.`);
  } else if (
    (humanChoice === `rock` && computerChoice === `scissors`) ||
    (humanChoice === `paper` && computerChoice === `rock`) ||
    (humanChoice === `scissors` && computerChoice === `paper`)
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  }
  else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}  
playRound(humanChoice, computerChoice)