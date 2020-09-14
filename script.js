let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
  return Math.floor(Math.random()*10)
};

let getAbsoluteDistance = (guess,value) => {
  return Math.abs(value - guess);
}

let compareGuesses = (humanGuess,compGuess,target) => {

  if (humanGuess < 0 || humanGuess > 9) {
      alert('This number is out of range! Please insert number between 0 and 9.');
      return;
    };
  if (getAbsoluteDistance(humanGuess,target) <= getAbsoluteDistance(compGuess,target)){
    return true
  } else {
    return false
  }
};



const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

let advanceRound = () => {
  currentRoundNumber++;
};
