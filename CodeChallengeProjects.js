//CHALLENGE 1: 

//The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

// Write your function here:
const canIVote = age => age >= 18;


// Uncomment the line below when you're ready to try out your function
console.log(canIVote(21)) // Should print true

// We encourage you to add more function calls of your own to test your code!

//CHALLENGE 2:

//Write a function, agreeOrDisagree(), that takes in two strings, and returns ‘You agree!’ if the two strings are the same and ‘You disagree!’ if the two strings are different.

// Write your function here:
const agreeOrDisagree = (statement1, statement2) => {
  if (statement1 === statement2) {
    return 'You agree!'
  } else {
    return 'You disagree!'
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!
console.log(agreeOrDisagree("yep", "nope")) 

//CHALLENGE 3:

/* Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return ‘baby’
4-12 should return ‘child’
13-19 should return ‘teen’
20-64 should return ‘adult’ 
65-140 should return ‘senior citizen’
If the number is less than 0 or greater than 140, the program should return ‘This is not a valid age’
*/

// Write your function here:
const lifePhase = age => {
  if (age <= 3 && age >= 0) {
    return 'baby';
  } else if (age >= 4 && age <= 12) {
    return 'child';
  } else if (age >= 13 && age <= 19) {
    return 'teen';
  } else if (age >= 20 && age <= 64) {
    return 'adult';
  } else if (age >= 65 && age <=140) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age'
  }
};


// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!
console.log(lifePhase(-1)) //should print 'This is not a valid age'
console.log(lifePhase(13)) //should print 'Teen'

/* Alternative using boolean and switch case

switch (true) {
 case age < 0: age = 141 //Moves to default condition
 case age < 4: return 'baby';
 case age < 13: return 'child';
 ...
 case age < 140: return 'senior';
 default: return 'This is not a valid age';
}
*/

//CHALLENGE 4:

/* Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: ‘F’
60-69 should return: ‘D’
70-79 should return: ‘C’
80-89 should return: ‘B’
90-100 should return: ‘A’
*/

// Write your function here:
const finalGrade = (num1, num2, num3) => {
  //Control flow for checking grades are a valid score  
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
    return 'You have entered an invalid grade.'
  } 
  
  //Control flow for returning letter grade
  let average = (num1 + num2 + num3) / 3;
  if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average <= 69) {
    return 'D';
  } else if (average <= 79) {
    return 'C';
  } else if (average <= 89) {
    return 'B';
  } else if (average <= 100) {
    return 'A';
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(95, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(10, 10, 15)) // Should print 'F'
console.log(finalGrade(0, 0, 0)) // Should print 'F'
console.log(finalGrade(0, -10, 0)) // Should print 'Invalid'

//CHALLENGE 5:

//Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

// Write your function here:
const reportingForDuty = (rank, lastName) => {
  return (`${rank} ${lastName} reporting for duty!`);
};


// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!
console.log(reportingForDuty('Master', 'Holmes'));

//CHALLENGE 6:

//We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6) + 1; //Added math.floor to get whole numbers 
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2; //added missing semi-colon
}; //added missing semi-colon

console.log(rollTheDice());

//CHALLENGE 7: 
/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
  //Control flow to check that earthWeight is a number & planet is a string
  if (isNaN(earthWeight)) {
    return 'Please enter a valid weight.' 
  } else if (!isNaN(planet)){
    return 'Please enter the name of a planet.'
  }
  //Control flow to calculate weight by planet
  planet = planet.toLowerCase(); //Converts planet into lower case
  switch (true) {
    case planet === 'mercury': return earthWeight * 0.378;
    case planet === 'venus': return earthWeight * 0.907;
    case planet === 'mars': return earthWeight * 0.377;
    case planet === 'jupiter': return earthWeight * 2.36;
    case planet === 'saturn': return earthWeight * 0.916;
    default: return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')); // Should print 236

// We encourage you to add more function calls of your own to test your code!
console.log(calculateWeight('sun',10)); // Should print please enter a valid weight
console.log(calculateWeight(10,10)); // Should print please enter the name of a planet.
console.log(calculateWeight(10,'satrun')); // Should print Invalid planet entry. . .

//CHALLENGE 8: 

//It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.

const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}

// Using a ternary: 
// const truthyOrFalsy = value => value ? true : false 

//CHALLENGE 9: 

/*
A person’s number of imaginary friends are always 33% of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result before returning it.

The JavaScript Math.round() function will come in handy. Check out the documentation here to figure out how it works.
*/

// Write your function here:
const numImaginaryFriends = friends => Math.round(friends * 0.33);

// Uncomment the line below when you're ready to try out your function
console.log(numImaginaryFriends(18)) // Should print 6

// We encourage you to add more function calls of your own to test your code!
console.log(numImaginaryFriends(0)) // Should print 0 :-[

//CHALLENGE 10: 

/*
Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:

```js sillySentence('excited', 'love', 'functions') // Should return 'I am so excited because I love coding! Time to write some more awesome functions!' ```
*/

// Write your function here:
const sillySentence = (adjective, verb, noun) => {
  return (`I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`);
};

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence('excited', 'love', 'functions'));

// We encourage you to add more function calls of your own to test your code!
console.log(sillySentence('yellow', 'gobble', 'creatures'));

//CHALLENGE 11:

/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
*/

// Write your function here:
const howOld = (age, year) => {
  const currentDate = new Date(); //Get's today's date
  const currentYear = currentDate.getFullYear(); //Gets the year
  const differenceInYears = year - currentYear; //Finds difference in years
  const newAge = age + differenceInYears; //Adds difference. 
  //Control flow statements based on newAge. If newAge > age, the year is in the future. If newAge < 0, it was before the person was born. If age > newAge > 0, then it is sometime in the past, after the person was born.
  if (newAge > age) {
    return (`You will be ${newAge} in the year ${year}.`)
  } else if (newAge >= 0) {
    return (`You were ${newAge} in the year ${year}.`);
  } else {
    return (`The year ${year} was ${Math.abs(newAge)} years before you were born.`); //Need Math.abs, else the years appear negative
  }
};

// Once your function is written, write function calls to test your code!
console.log(howOld(31,1968)); //Should say 20 years before born
console.log(howOld(31,2022)); //Should say you will be 33
console.log(howOld(31,1988)); //Should say 0 -> should change to if 0, then say that's the year you were born!

//CHALLENGE 12

/*
Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!

Here’s how it’s supposed to calculate the relationship:
100 should return ‘You are likely identical twins.’
35-99 should return ‘You are likely parent and child or full siblings.’
14-34 should return ‘You are likely grandparent and grandchild, aunt/uncle and neice/nephew, or half siblings.’
6-13 should return ‘You are likely 1st cousins.’
3-5 should return ‘You are likely 2nd cousins.’
1-2 should return ‘You are likely 3rd cousins.’
0 should return ‘You are likely not related.’

Unfortunately, it’s not working how we want!

whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'

whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
Can you fix our code, please?
*/

//My corrected code:

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    //Condition needed to be changed from ".." < 13 to ".." > 13
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (npercentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))

console.log(whatRelation(3))

//CHALLENGE 13

/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip 
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20
*/

// Write your function here:
const tipCalculator = (quality, total) => {
  //converts user input to lowercase for control low below
  quality = quality.toLowerCase();
  //Flow control for determining tip percentage based on quality; there should be validation logic prior to the switch case to check the quality paramater is 'bad', 'ok', and alert the user. Else there should be a condition notifying the user that it went to the default. 
  switch (true) {
    case quality === 'bad': return total * 0.05;
    case quality === 'ok': return total * 0.15;
    case quality === 'good': return total * 0.20;
    case quality === 'excellent': return total * 0.30;
    default: return total * 0.18;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!

//CHALLENGE 14

/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'
*/

// Write your function here:
const toEmoticon = (type) => {
  //converts type to lowercase for control flow below
  type = type.toLowerCase();
  
  //Determines which emoticon to return based on type parameter
  switch(true) {
      case type === 'shrug': return '|_{"}_|';
    case type === 'smiley face': return ':)';
    case type === 'frowny face': return ':(';
      case type === 'winky face': return ';)';
      case type === 'heart': return '<3';
    default: return '|_(* ~ *)_|';
  }
}


// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
console.log(toEmoticon("ShRug")) //Should print |_{"}_|
console.log(toEmoticon("SMILEY FACE")) //should print :)
console.log(toEmoticon("SMILEYFACE")) //should print '|_(* ~ *)_|', could add a flow control to check it's a valid condition 
