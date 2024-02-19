function goldMine(input) {
    let index = 0;
    let location = Number(input[index++]);
    for (let i = 0; i < location; i++){
        let expectedAverageYield = Number(input[index++]);
        let daysCount = Number(input[index++]);
        let yield = 0;
        for(let a = 0; a < daysCount; a++){
            let currentYield = Number(input[index++]);
            yield += currentYield;
        }
        let averagePerLocation = yield / daysCount;
        let difference = Math.abs(averagePerLocation - expectedAverageYield);
        if (averagePerLocation < expectedAverageYield){
            console.log(`You need ${difference.toFixed(2)} gold.`);
        }else {
            console.log(`Good job! Average gold per day: ${averagePerLocation.toFixed(2)}.`);
        }
    }
}
goldMine(["1","5","3","10","1","3"]);
