function building(input){
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor > 0; floor--){
        let buffer = "";
        for ( let room = 0; room < y; room++){
            if(floor === x){
                buffer += `L${floor}${room} `;
            } else if (floor % 2 !== 0){
                buffer += `A${floor}${room} `;
            }else {
                buffer += `O${floor}${room} `;
            }
        }
        console.log(buffer);
    }
}
building(["6", "4"]);