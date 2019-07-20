//PART 1: GET USER'S CHOICE

//Functional expression in arrow syntax to get userInput.
const getUserChoice = userInput => {
  //Converts to lowercase incase user enters different capitalizations.
  userInput = userInput.toLowerCase();
  //Checks is user input a valid choice, displays error message if not
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('That\'s not an option. Did you spell Scissors right?')
  }
};

//PART 2: GET COMPUTER'S CHOICE

//Functional expression in arrow syntax to get computer's choice
const getComputerChoice = () => {
  //Random number generator to create whole number between 0-2.
  let randNum = Math.floor(Math.random()*3);
  //Returns computer's choice depending on randNum. Assigns 0 = rock, 1 = paper, 2 = scissors
  switch (randNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

//PART 3: DETERMINE WINNER

//Functional expression in arrow syntax to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  //Checks for cheat code, then the tie condition else, else we determine the winner
  if (userChoice === 'bomb'){
    return 'Your bomb blew up the computer! Looks like you win!';
  } else if (userChoice === computerChoice) {
    return 'The game was a tie.';
  } else {
    //Returns winner if userChoice = rock
     if (userChoice === 'rock') {
       if (computerChoice === 'paper') {
         return 'The computer\'s paper smoothers your rock. Better luck next time.';
       } 
       else {
         return 'Nice throw! The computer\'s scissors are smashed to oblivion by your rock.';
       }
     }  
	  //Returns winner if userChoice = paper
    if (userChoice === 'paper') {
       if (computerChoice === 'scissors') {
         return 'The computer\'s scissors cut your paper to shreds. Better luck next time.';
       } 
       else {
         return 'Nice throw! Your paper just smoothered the computer\'s rock.';
       }
  }
    //Returns winner if userChoice = scissors
    if (userChoice === 'scissors') {
       if (computerChoice === 'rock') {
         return 'The computer\'s rock crushes your scissors. Better luck next time.';
       } 
       else {
         return 'Nice throw! Your scissors just cut the computer\'s paper down to size.';
      }
    }
  }
};

//PART 4: START PROGRAM AND DISPLAY RESULTS

//Functional expression in arrow syntax used to create the game. 
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  //Prints results to the console
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

//Runs the game
playGame();
