//based on the project provided in codecademy (but i do not have access to because
//i refuse to give in to codeademy's capitalist narrative )

//dice game
//roll two dice
//sum the dice
//print?
//if we want to get a random value within a range we
//need to create our own function.
function randomInt(min, max){
    //removed a section here from the original code as it caused NaN
    //original code:
    /*
    min = Math.ceil(min);
    max = Math.floor(max);
     */
    return Math.floor(Math.random() * (max - min)+min);
    //code from:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

let dice1 = randomInt(0,6);

let dice2 = randomInt(0,6);

if(dice1 > dice2){
    console.log('dice 1 is the winner!\n');
}
else if(dice2 > dice1){
    console.log('dice 2 is the winner!\n');
}
else{
    console.log('Draw!');
}
console.log(`dice 1: ${dice1}\ndice 2: ${dice2}\nTotal: `+(dice1 + dice2));