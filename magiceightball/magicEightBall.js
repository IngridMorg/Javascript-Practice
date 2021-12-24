let userName = '';
userName === 'Jane' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'What will father christmas get me for christmas?';
console.log(userQuestion);
//to make the value range from 0 to 8 we can multiply the return value by 8
//to then restrict down to 7 we round down with floor
let randomNumber = Math.floor(Math.random()*8);