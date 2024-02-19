function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let numberSum = 0;
    let isFound = false;
    for (let a = startInterval; a <= endInterval; a++) {
        for (let b = startInterval; b <= endInterval; b++) {
            numberSum = a + b;
            counter++;
            if (numberSum == magicNumber) {
                isFound = true;
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (numberSum !== magicNumber) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers([1, 10, 5]);