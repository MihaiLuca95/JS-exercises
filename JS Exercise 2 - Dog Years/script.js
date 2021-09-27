const myAge = 25; // This is a variable named myAge which declared and stored my age.

let earlyYears = 2; // This variable can be reassigned.
earlyYears *= 10.5; // Using multiplication assignment operator we multiply the value by 10.5 and reassign it to earlyYears.

let laterYears = myAge - 2; // We substract 2 from myAge variavle and assign value to laterYears variable, it can be reassign.

laterYears *= 4; // Using multiplication assignment operator we multiply by 4 laterYears and reassign value.

console.log(earlyYears);
console.log(laterYears);

const myAgeInDogYears = earlyYears + laterYears; // Using the add operator we add to value and assign it to myAgeInDogYears.

let myName = 'Mihai'.toLowerCase(); // The .toLowerCase() method returns a string with all lowercase letters. This string stored in myName variable.


// Using string interpolation and console.log() statement we display the value in the following sentence.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);