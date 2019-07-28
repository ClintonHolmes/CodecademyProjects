<script type="text/javascript">

//Creates a variable to store user's name and greets them
let userName = '';
userName ? console.log(`Hello ${userName}!`): console.log('Hello!');

//Prints to the console the question asked by the user.
let userQuestion = 'Will today be a great day?';
console.log(`The user asked: ${userQuestion}`);

//Generates a random number, selects a response based on the random number, and reports it back to the user in the console.
let randomNumber = Math.floor(Math.random()*4); //random number
let eightBall = ''; //variable to carry the response

/*switch for the different cases
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy, try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
*/

//if you change from a switch to an if/ else if/ else statement. I didn't see the point in going to 8 responses to I changed randomNumber to only be 1-4.
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidely so';
} else if (randomNumber === 2) {
  eightBall = 'Monkey crap';
} else {
  eightBall = 'Enjoy the pea soup';
}

//Reports answer to user
console.log(`${eightBall}`);
</script>
