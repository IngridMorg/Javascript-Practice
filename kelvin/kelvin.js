//create a const variable to store kelvin temp
const kelvin = 293;
//celsius is 273 less than kelvin therefore:
const celsius = kelvin - 273;
//calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round the calculated value
fahrenheit = Math.floor(fahrenheit);

console.log(`the temperature is ${fahrenheit} degrees fahrenheit.`);

//newton scale extension
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`the temperature is ${newton} newton degrees.`);