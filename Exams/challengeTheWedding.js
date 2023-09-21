function challengeTheWedding (input){
    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let tableCount = Number(input[2]);
    let counter = 0;
    let buffer = "";
    for (let a = 1; a <= menCount; a++){
        for (let b = 1; b <= womenCount; b++){
            buffer += `(${a} <-> ${b}) `;
            counter++;
            if (counter === tableCount){
                break;
            }
        }
        if (counter === tableCount){
            break;
        }
    }
    console.log(buffer);
}
challengeTheWedding([2, 2, 6]);