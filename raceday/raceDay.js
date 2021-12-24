let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;

if(runnerAge > 18 && raceNumber >= 1000){
    registeredEarly = true;
}
if(runnerAge>18 && registeredEarly === true){
    console.log(`${raceNumber} runs at 9:30am.`);
} else if(runnerAge > 18 && registeredEarly === false){
    console.log(`${raceNumber} runs at 11:00am.`);
} else if(runnerAge < 18){
    console.log(`${raceNumber} runs at 12:30pm`);
}else{
    console.log(`${raceNumber} please see the registration desk.`);
}