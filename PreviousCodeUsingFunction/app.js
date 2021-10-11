console.log('####################')
// 1. This function convert Kelvin degrees to Fahrenheit degrees.
const kelvinToFahrenheit = kelvin => {
    const FAHRENHEIT = kelvin * (9/5) - 459.67; // The expression of conversion from Kelvin to Fahrenheit
    return Math.round(FAHRENHEIT); // The Math.round() function returns the value of a number rounded to the nearest integer.
}

console.log(`The temperature is ${kelvinToFahrenheit(293)} degrees Fahrenheit.`);


console.log('####################')
// 2. The humanAgeInDogYears function return the corresponding number of dog years.
const humanAgeInDogYears = function(myAge) {
    let earlyYears = 2 * 10.5; 

    let laterYears = (myAge - 2) * 4;
    const myAgeInDogYears = earlyYears + laterYears;

    return console.log(`I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
}

humanAgeInDogYears(25);


console.log('####################')
// 3. Function which return eight ball answer.
function answerMyQuestion(userName, userQuestion) {
    userName ? console.log('Hello, ' + userName + '!') : console.log('Hello!');

    console.log(userName + ': -' + userQuestion);

    let randomNumber = Math.floor(Math.random() * 8);

    let eightBall = '';

    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1: 
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
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
        default:
            console.log(`Sorry, we are out of ${randomNumber}.`);
    }

    return console.log('MagicEightBall: -' + eightBall + '.');
}

answerMyQuestion('John', 'Will I get a IT job in two month?')


console.log('####################');
// 4. Function return the time the users will start the race.
const raceTime = (userAge, registeredEarly) => {
    let  raceNumber = Math.floor(Math.random() * 1000);

    if(userAge >= 18 && registeredEarly == true) {
        raceNumber += 1000; // Add 1000 to raceNumber if it's true.
    }

    //This statement will check age and registration time to determine race time.
    if (userAge >= 18 && registeredEarly == true) {
       return console.log(`Your race will be at 9:30 am. Your race number is: ${raceNumber}`);
    } else if (userAge >= 18 && registeredEarly == false) {
       return console.log(`Your race will be at 11:00 am. Your race number is: ${raceNumber}`);
    } else if (userAge < 18) {
       return console.log(`Your race will be at 12:30 pm. Your race number is: ${raceNumber}`);
    }
}

raceTime(23, true);
