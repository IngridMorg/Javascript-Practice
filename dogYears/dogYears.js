//dog years project from codecademy
//variable storing my age
const myAge = 19;
//changing variable for early years
let earlyYears = 2;
earlyYears *= 10.5;
//subtract 2 from myAge as we have accounted for this in early years
let laterYears = myAge -2;
//multiply by 4 because apparently this is how dog years work
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//calculate age in dog years
const myAgeInDogYears = earlyYears + laterYears;

let myName = 'Ingrid';
//set name to alll lower case
myName = myName.toLowerCase();
//final print
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
