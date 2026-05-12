function getHumanChoice(){
  let humanChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase();

  if (humanChoice === `rock`) {
    console.log(`You choose Rock!`);
    return `rock`;
  } else if (humanChoice === `paper`) {
    console.log(`You choose Paper!`);
    return `paper`;
  } else {
    console.log(`You choose Scissors!`);
    return `scissors`;
  }
}
const humanSelection = getHumanChoice();


function getComputerChoice(){
  let computerChoice = Math.random() 

  if (computerChoice < 0.34) {
    console.log(`CPU choose Rock!`);
    return (`rock`);
  } else if 
    (computerChoice >= 0.34 && computerChoice < 0.67) {
      console.log(`CPU choose Paper!`);
      return (`paper`)
    }
  else {
    console.log(`CPU choose Scissors!`);
    return (`scissors`)
  }
}
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (humanChoice === `rock` && computerChoice === `scissors`) {
    console.log(`You win!`);
    return humanScore = humanScore + 1;
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    console.log(`You win!`);
    return humanScore = humanScore + 1;
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    console.log(`You win!`);
    return humanScore = humanScore + 1;
  } else if (humanChoice === computerChoice) {
    console.log(`It's a draw`);
    return (`Draw`)
  } else {
    console.log(`CPU wins!`);
    return computerScore = computerScore + 1;
  }
}



