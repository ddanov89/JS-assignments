function gameOfIntervals(input){
    let moveCount = Number(input[0]);
    let scoreSum = 0;
    let zeroTo9 = 0;
    let zeroTo9Sum = 0;
    let tenTo19 = 0;
    let tenTo19Sum = 0;
    let twentyTo29 = 0;
    let twentyTo29Sum = 0;
    let thirtyTo39 = 0;
    let thirtyTo39Sum = 0;
    let fortyTo50 = 0;
    let fortyTo50Sum = 0;
    let average = 0;
    let invalidNumberCount = 0;
    for (let i = 1; i <= moveCount; i++){
        if (input[i] >= 0 && input[i] <= 9){
            zeroTo9++
            zeroTo9Sum += Number(input[i]);
            scoreSum += Number(input[i]) *  0.20;
        }else if (input[i] >= 10 && input[i] <= 19){
            tenTo19++;
            tenTo19Sum += Number(input[i]);
            scoreSum += Number(input[i]) * 0.30;
        }else if (input[i] >= 20 && input[i] <= 29){
            twentyTo29++;
            twentyTo29Sum += Number(input[i]);
            scoreSum += Number(input[i]) * 0.40;
        }else if (input[i] >= 30 && input[i] <= 39){
            thirtyTo39++;
            thirtyTo39Sum += Number(input[i]);
            scoreSum += 50;
        }else if (input[i] >= 40 && input[i] <= 50){
            fortyTo50++;
            fortyTo50Sum += Number(input[i]);
            scoreSum += 100;
        }else if(input[i] < 0 || input[i] > 50){
            invalidNumberCount++;
            scoreSum /= 2;
        }
    }
    average = zeroTo9Sum + tenTo19Sum + twentyTo29 + thirtyTo39Sum + fortyTo50Sum / moveCount;
    console.log(`${scoreSum.toFixed(2)}`);
    console.log(`From 0 to 9: ${(zeroTo9 / moveCount * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(tenTo19 / moveCount * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(twentyTo29 / moveCount * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(thirtyTo39 / moveCount * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(fortyTo50 / moveCount * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNumberCount / moveCount * 100).toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);