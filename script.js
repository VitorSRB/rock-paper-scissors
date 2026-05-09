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


