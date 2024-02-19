function giftsFromSanta(input){
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);
    let buff = "";
    for (let index = M; index >= N; index--) {
        if (index % 2 === 0 && index % 3 ===0){
            if (S !== index){
                buff += `${index} `;
            }else if (S === index){
                break;
            }
        }
    }
    console.log(buff);
}
giftsFromSanta(["1",
"36",
"12"]);