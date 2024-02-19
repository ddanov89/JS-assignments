function specialNumbers(input) {
    let n = Number(input[0]);
    let buff = "";
    let isDivide = false;
    let counterDivide = 0;
 
    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = String(i);
        counterDivide = 0;
        for (j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));
            if (n % currentDigit === 0) {
                counterDivide++;
            }
        }
        if (counterDivide === 4) {
            buff += currentNumber + " ";
        }
    }
    console.log(buff);
}