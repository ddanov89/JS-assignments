function numberPyramid (input){
    let n = Number(input[0]);
    let printNumber = 1;
    let isFinish = false;
    for ( let rows = 1; rows <= n; rows++){
        let buff = "";
        for ( let columns = 1; columns <= rows; columns++){
            buff += `${printNumber} `;
            if (printNumber === n){
                isFinish = true;
                break;
            }
            printNumber++;
        }
        console.log(buff);
        if (isFinish){
            break;
        }
    }
}
numberPyramid([12]);