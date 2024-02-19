function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);
    let totalTimeNeeded = distanceInMeters * timeForOneMeter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTimeWithDelay = totalTimeNeeded + delay;
    if (totalTimeWithDelay < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(totalTimeWithDelay).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTimeWithDelay - recordInSeconds).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord([10464, 1500, 20]);