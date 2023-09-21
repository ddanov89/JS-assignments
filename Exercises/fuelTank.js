function fuelTank(input) {
    let fuelType = input[0];
    let fuelInLiters = Number(input[1]);
    if (fuelType === "Diesel" || fuelType === "Gasoline" || fuelType === "Gas") {
        if (fuelInLiters >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        }else if(fuelInLiters < 25){
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    }else {
        console.log("Invalid fuel!");
    }
}
fuelTank(["Gas", 10]);