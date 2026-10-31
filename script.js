let humanScore = 0; 
let computerScore = 0;
let consecutiveErros = 0; 
let isDisqualified = false;

function getHumanChoice() { 
  while (true) {
    let humanPlayer = prompt(`Rock, Paper or Scissors?`);

    // Guard Clause - Proteção caso o usuário clique em 'cancelar' no prompt
    if (humanPlayer === null) {
      humanPlayer = ``;
    }

    humanPlayer = humanPlayer.toLowerCase().trim();

    // 1. Verifica se é uma opção válida
    if (humanPlayer === `rock` || humanPlayer === `paper` || humanPlayer === `scissors`) {
      consecutiveErros = 0;
      console.log(`You choose ${humanPlayer}!`);
      return humanPlayer;
    }

    // 2. Se chegou aqui, foi erro de digitação
    consecutiveErros++;
    console.log(`You made a typo; please pay attention to the available options and try again.`);

    // 3. Checa desclassificação por 3 erros consecutivos
    if (consecutiveErros >= 3) {
      console.log(`3 consecutive typos! You were disqualified!`);
      return false; // Retorna false para indicar desclassificação no playGame()
    }
  }
}

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
    console.log(`It's a draw! Both choose ${humanChoice}.`);
  } else if (
    (humanChoice === `rock` && computerChoice === `scissors`) ||
    (humanChoice === `paper` && computerChoice === `rock`) ||
    (humanChoice === `scissors` && computerChoice === `paper`)
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }

  console.log(`SCORE`);
  console.log(`YOU: ${humanScore} CPU: ${computerScore}`);
}  

function playGame() { 
  //Guard Clause
  if (isDisqualified) return;
  
  const humanChoice = getHumanChoice();
  
  if (humanChoice === false) {
    isDisqualified = true;
    humanScore = 0;
    computerScore = 3;
    console.log(`CPU wins by disqualification!`);
    return;
  } 

  const computerChoice = getComputerChoice();  
  playRound(humanChoice, computerChoice); 
}

function finalScore() { 
  if (humanScore === computerScore) {
    console.log(`FINAL SCORE: YOU ${humanScore} CPU: ${computerScore}`);
    console.log(`This battle was a DRAW!`);
  } else if (humanScore > computerScore) {
    console.log(`FINAL SCORE: YOU ${humanScore} CPU: ${computerScore}`);
    console.log(`YOU WIN!`);
  } else {
    console.log(`FINAL SCORE: YOU ${humanScore} CPU: ${computerScore}`);
    console.log(`CPU wins!`);
  }
}

let btn = document.querySelectorAll('.btn');

btn.addEventListener('click',)

// Execução das partidas
// playGame();
// playGame();
// playGame();
// playGame();
// playGame();

finalScore();