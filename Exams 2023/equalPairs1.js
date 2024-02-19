function equalPairs (input){
    let numberOfPairs = Number(input[0]);
    let firstNumber = Number(input[1]);
    let secondNumber = Number(input[2]);
    let tempPreviousSum = firstNumber + secondNumber;
    let tempNextSum = 0;
    let maxDifference = 0;
    let tempDifference = 0;
    for ( let i = 3; i < numberOfPairs * 2; i += 2){
        firstNumber = Number(input[i]);
        secondNumber = Number(input[i + 1]);
        tempNextSum = firstNumber + secondNumber;
        tempDifference = Math.max(tempNextSum, tempPreviousSum) - Math.min(tempNextSum, tempPreviousSum);
        tempPreviousSum = tempNextSum;
        if ( tempDifference > maxDifference){
            maxDifference = tempDifference;
        }
    }
    if ( maxDifference == 0){
        console.log(`Yes, value=${tempPreviousSum} `);
    }else {
        console.log(`No, maxdiff=${maxDifference}`);
    }
}
equalPairs ([2, 1, 2, 2, 2]);