let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 19;

if(runnerAge > 18 && raceNumber >= 1000){
    registeredEarly = true;
}