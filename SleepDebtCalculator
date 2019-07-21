/* PROJECT DESCRIPTION 
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.
*/

//PART I: FUNCTION TO COLLECT ACTUAL HOURS SLEPT EACH DAY
const getSleepHours = day => {
  day = day.toLowerCase(); //converts day input to lowercase.
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break; 
    default:
      console.log('Day not found. Did you spell the day of the week right?');
      break;
  }
};

//PART 2: Function to calculate total hours slept in the past week
const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
};

//PART 3: Function to calculate the idea hours slept each week. Set the ideal hours per night, then multiply by 7 for each day of the week. 
const getIdealSleepHours = () => {
  const idealHoursPerNight = 7.5;
  return idealHoursPerNight * 7;
};

//PART 4: CALCULATES SLEEP DEBT
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDebt = Math.abs(idealSleepHours - actualSleepHours); //holds difference in sleep hours to log in the console
  if (actualSleepHours === idealSleepHours) {
    console.log('Great job! You got the perfect amount of sleep');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You\'re short ' + sleepDebt + ' hours of sleep. Consider getting some rest.');
  } else {
    console.log('You got ' + sleepDebt + ' more hours of sleep than you needed this week.');
  }
};

//APPENDIX FOR TEST CODE
calculateSleepDebt();
