//This is a constant where it is hosted kelvin unit temperature
const kelvin = 0;
//This is a constant where it is hosted celsius unit temperature
let celsius = 273;
//Substract
celsius -= kelvin;
//This is a constant where it is hosted fahrenheit unit temperature
let fahrenheit = celsius *(9/5) + 32;
//It needs to be rounded since the last variable has decimal numbers
fahrenheit = Math.floor(fahrenheit);
//This is a constant where it is hosted newton unit temperature
let newton = celsius * (33/100);
//It needs to be rounded since the last variable has decimal numbers
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);
