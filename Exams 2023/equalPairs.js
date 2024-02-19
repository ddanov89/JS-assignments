function equalPairs (input){
    let numberOfPairs = Number(input[0]);
    let index = 1;

    let firstNumber = Number(input[index]);
    index++;
    let secondNumber = Number(input[index]);
    index++;
    
    let truePairCounter = 0;

    let pair = firstNumber + secondNumber;
    let otherPair = 0;

    for (let i = 0; i <= numberOfPairs; i++){

        if (index === 3){
            truePairCounter++;
        }
        if(pair === otherPair){
            truePairCounter++;
        }
        if(truePairCounter === numberOfPairs){
            console.log(`Yes, value = ${pair} `);
            break;
        }
        firstNumber = Number(input[index]);
        index++;
        secondNumber = (input[index]);
        index++;
        otherPair = firstNumber + secondNumber;
    }
    index = 1;

    let small = Number.MAX_SAFE_INTEGER;
    let big = Number.MIN_SAFE_INTEGER;

    for(let i = index; i <= numberOfPairs + 2; i++){
        firstNumber = Number(input[index]);
        index++;
        secondNumber = Number(input[index]);
        index++;
        pair = firstNumber + secondNumber;

        if (small >= pair){
            small = pair;
        }
        if (big <= pair){
            big = pair;
        }
    }
    if (truePairCounter !== numberOfPairs){
        console.log(`No, maxdiff=${big - small}`);
    }
}
equalPairs([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);