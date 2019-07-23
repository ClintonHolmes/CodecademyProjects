let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//PART 1: FUNCTION TO CREATE THE SECRET NUMBER
const generateTarget = () => Math.floor(Math.random()*10);

//PART 2: COMPARING GUESSES TO THE SECRET NUMBER
const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (Math.abs(secretTargetNumber - userGuess) <= Math.abs(secretTargetNumber - computerGuess)) {
    return true;
  } else {
    return false;
  }
};

//PART 3: UPDATING THE SCORE
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

//PART 4: ADVANCES THE ROUND
const advanceRound = () => currentRoundNumber + 1;

//APPENDIX CODE FOR TESTING CODE
//console.log(compareGuesses(5,3,generateTarget()));
