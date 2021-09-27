const kelvin = 293; // This variable describe the temperature in Kelvin

const celsius = kelvin - 273; // this variable celsius converts Kelvin to Celsius degrees by substraction


// Below is the conversion of the temperature from celsius to fahrenheit and stored value in fahrenheit variable 
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit); // Using .floor() method we round down the result and we stored the result in fahrenheit variable


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
