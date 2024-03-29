//I'm assuming in later lessons I can collect user information. 

//Selects a random number between 0-999
let raceNumber = Math.floor(Math.random() * 1000);
//Variables to hold runner age and registration status
let earlyRegister = false;
let runnerAge = 18;

//Reports race number and start time to any runner that is an adult AND registered early
if (earlyRegister === true && runnerAge > 18){
  raceNumber += 1000;
  console.log(`Welcome! Thanks for signing up. Your race number is ${raceNumber}. Please show up at the starting line at 9:30am!`)
} 
//Reports race number and start time to any runner that is an adult AND did not register early
else if (earlyRegister !== true && runnerAge >18){
  console.log(`Welcome! Thanks for signing up. Your race number is ${raceNumber}. Please show up at the starting line at 11:00am!`)
} 
//Reports race number and start time to any runner that is under 18.
else if (runnerAge <18){
  console.log(`Welcome! Thanks for signing up. Your race number is ${raceNumber}. Please show up at the starting line at 12:30pm!`)
} 
//Reports next step to runner's that are exactly 18. 
else {
  console.log('Please see the registration desk for your start time. ')
}
