function luckyNumber(input){
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let buffer = "";
    for( let a = startInterval; a <= endInterval; a++){
        for (let b = startInterval; b <= endInterval; b++){
            for (let c = startInterval; c <= endInterval; c++){
                for (let d = startInterval; d <= endInterval; d++){
                    if ((a % 2 === 0 && d % 2 === 1 )|| (d % 2 === 0 && a % 2 === 1)){
                        if (a > d){
                            if ( (b + c) % 2 === 0){
                                buffer += `${a}${b}${c}${d} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(buffer);
}
luckyNumber([2,3]);