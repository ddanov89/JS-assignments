function mountainRun(input){
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecForOneM = Number(input[2]);
    let totalTime = distanceInMeters * timeInSecForOneM;
    let extraTime = Math.floor(distanceInMeters / 50) * 30;
    totalTime += extraTime;
    if (totalTime < recordInSec){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }else {
        let difference = Math.abs(totalTime - recordInSec);
        console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
mountainRun([1377, 389, 3]);