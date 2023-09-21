function bikeRace(input){
    let juniorRacers = Number(input[0]);
    let seniorRacers = Number(input[1]);
    let track = input[2];
    let fee = 0;
    let feeJunior = 0;
    let feeSenior = 0;
    let totalRacers = juniorRacers + seniorRacers;
    let donations = 0;
    if (track === "trail"){
        feeJunior = 5.50;
        feeSenior = 7;
    }else if (track === "cross-country"){
        feeJunior = 8;
        feeSenior = 9.50;
        if (totalRacers >= 50){
            fee *= 0.75;
        }
    }else if ( track === "downhill"){
        feeJunior = 12.25;
        feeSenior = 13.75;
    }else if( track === "road"){
        feeJunior = 20;
        feeSenior = 21.50;
    }
    fee = juniorRacers * feeJunior + seniorRacers * feeSenior;
    donations = fee * 0.95;
    console.log(`${donations.toFixed(2)}`);
}
bikeRace([10, 10, "downhill"]);