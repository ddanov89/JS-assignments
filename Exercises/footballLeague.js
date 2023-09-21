function footballLeague (input){
    let stadiumCapacity = Number(input[0]);
    let fanCount = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    for(let i = 2; i <= fanCount + 1; i++){
        if (input[i] === "A"){
            sectorA++;
        }else if (input[i] === "B"){
            sectorB++;
        }else if (input[i] === "V"){
            sectorV++;
        }else if (input[i] === "G"){
            sectorG++;
        }
    }
    console.log(`${(sectorA / fanCount * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fanCount * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fanCount * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fanCount * 100).toFixed(2)}%`);
    console.log(`${(fanCount / stadiumCapacity * 100).toFixed(2)}%`);
}
footballLeague([93, 16, "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);