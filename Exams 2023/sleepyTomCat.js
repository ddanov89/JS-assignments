function sleepyTomCat(input) {
    let restDays = Number(input[0]);
    restDaysPlay = restDays * 127; // 14351
    workDays = 365 - restDays; //252
    workDaysInMinutes = workDays * 63; // 15876
    restDaysTotal = restDaysPlay + workDaysInMinutes; // 30227
    playNorm = Math.abs((restDaysTotal - 30000) / 60);
    playNormMinutes = Math.ceil((restDaysTotal-30000) % 60);
    if (restDaysTotal <= 30000) {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(playNorm)} hours and ${Math.abs(playNormMinutes)} minutes less for play`);
    } else if (restDaysTotal > 30000) {
        console.log("Tom will run away");
        console.log(`${Math.floor(playNorm)} hours and ${playNormMinutes} minutes more for play`);
    }
}
sleepyTomCat([20]);