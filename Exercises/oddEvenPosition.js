function oddEvenPosition(input) {
    let numberCounter = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;
    let maxOdd = Number.MIN_SAFE_INTEGER;
    let maxEven = Number.MIN_SAFE_INTEGER;
    let minOdd = Number.MAX_SAFE_INTEGER;
    let minEven = Number.MAX_SAFE_INTEGER;
    if (numberCounter == 0) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log("OddMin=No,");
        console.log("OddMax=No,");
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log("EvenMin=No,");
        console.log("EvenMax=No");
    } else if (numberCounter == 1) {
        console.log(`OddSum=${Number(input[1]).toFixed(2)},`);
        console.log(`OddMin=${Number(input[1]).toFixed(2)},`);
        console.log(`OddMax=${Number(input[1]).toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log("EvenMin=No,");
        console.log("EvenMax=No");
    } else {
        for (let i = 1; i <= numberCounter; i++) {
            if (i % 2 == 0) {
                evenSum += Number(input[i]);
                if (Number(input[i]) > maxEven) {
                    maxEven = Number(input[i]);
                }
                if (Number(input[i]) < minEven) {
                    minEven = Number(input[i]);
                }
            } else {
                oddSum += Number(input[i]);
                if (Number(input[i]) > maxOdd) {
                    maxOdd = Number(input[i]);
                }
                if (Number(input[i]) < minOdd) {
                    minOdd = Number(input[i]);
                }
            }
        }
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${minOdd.toFixed(2)},`);
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${minEven.toFixed(2)},`);
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    }
}
oddEvenPosition([10, -4.5, 3433.5, -180.33, 323.2, -55.55, 28.28, -30.30, 44.44, -77.77, 88.88]);