function lunchBreak(input){
    let name = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);
    let lunchTime = restDuration / 8;
    let restTime = restDuration / 4;
    let timeLeft = restDuration - lunchTime - restTime;
    if (episodeDuration > timeLeft){
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`);
    } else {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`);
    }
}
lunchBreak(["Game of Thrones", 60, 96]);