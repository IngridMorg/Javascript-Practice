//based on the project provided in codecademy (but i do not have access to because
//i refuse to give in to codeademy's capitalist narrative )

//dice game
//roll two dice
//sum the dice
//print?

let dice1 = Math.getRandomInt(0,6);
let dice2 = Math.getRandomInt(0,6);

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

