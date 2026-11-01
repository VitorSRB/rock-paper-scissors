let humanScore = 0; 
let computerScore = 0;

const placarPlayer = document.querySelector(`#playerScore`);
const placarCpu = document.querySelector(`#cpuScore`)
const message = document.querySelector(`#message`);

const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors')

btnRock.addEventListener(`click`,(e) => playRound(`rock`, getComputerChoice()));
btnPaper.addEventListener(`click`,(e) => playRound(`paper`, getComputerChoice()));
btnScissors.addEventListener(`click`,(e) => playRound(`scissors`, getComputerChoice()));


function getComputerChoice() { 
  let computerPlayer = Math.random();

  if (computerPlayer < 0.34) {
    console.log(`CPU choose Rock!`);
    return `rock`;
  } else if (computerPlayer >= 0.34 && computerPlayer < 0.67) {
    console.log(`CPU choose Paper!`);
    return `paper`;
  } else {
    console.log(`CPU choose Scissors!`);
    return `scissors`;
  }
}

function playRound(humanChoice, computerChoice) { 
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    message.textContent = `It s a draw! Both choose ${humanChoice}.`;
    console.log(`It's a draw! Both choose ${humanChoice}.`);
  } else if (
    (humanChoice === `rock` && computerChoice === `scissors`) ||
    (humanChoice === `paper` && computerChoice === `rock`) ||
    (humanChoice === `scissors` && computerChoice === `paper`)
  ) {
    humanScore++;
    message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    message.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
  
  placarPlayer.textContent = humanScore;
  placarCpu.textContent = computerScore;
  
  if (humanScore === 5 || computerScore === 5) {
    declareWinner();
  }
}  

function declareWinner (){
  if (humanScore === computerScore) {
  message.textContent = `This battle was a DRAW! FINAL SCORE: YOU ${humanScore} CPU: ${computerScore}`;
} else if (humanScore > computerScore) {
  message.textContent = `YOU WIN THE GAME! FINAL SCORE: YOU ${humanScore} CPU: ${computerScore}`;
} else {
  message.textContent = `YOU LOSE THE GAME! FINAL SCORE: YOU ${humanScore} CPU: ${computerScore}`;
}
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}


