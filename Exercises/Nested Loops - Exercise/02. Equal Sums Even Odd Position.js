function equalSumOfEvenAndOdds(input){
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let buff = "";
    for(let i = startInterval; i <= endInterval; i++){
        let numAsString = String(i);
        let sumEvenPosition = 0;
        let sumOddPosition = 0;
        for (let charPosition = 0; charPosition <numAsString.length; charPosition++){
            if (charPosition % 2 === 0){
                sumEvenPosition += Number(numAsString[charPosition]);
            }else {
                sumOddPosition += Number(numAsString[charPosition]);
            }
        }
        if (sumEvenPosition === sumOddPosition){
            buff += numAsString + " ";
        }
    }
    console.log(buff);
}
equalSumOfEvenAndOdds([100000, 100050]);