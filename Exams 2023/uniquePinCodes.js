function uniquePinCodes (input){
    let firstNumberTop = Number(input[0]);
    let secondNumberTop = Number(input[1]);
    let thirdNumberTop = Number(input[2]);
    for (let a = 1; a <= firstNumberTop; a++) {
        for (let b = 2; b <= secondNumberTop; b++) {
            for (let c = 1; c <= thirdNumberTop; c++){
                if ( a % 2 === 0 && c % 2 === 0){
                    if (b == 1 || b == 2 || b == 3 || b == 5 || b == 7){
                        console.log(`${a} ${b} ${c} `);
                    }
                }
            }
        }
    }
}
uniquePinCodes([3, 5, 5]);