function fuelTankPart2(input) {

    let fuelType = input[0];
    let quantityFuel = Number(input[1]);
    let clubCart = input[2];

    gasolinePrice = 2.22;
    dieselPrice = 2.33;
    gasPrice = 0.93;
    finalPrice = 0;

    if (clubCart === "Yes") {
        if (fuelType === "Gasoline"){
            gasolinePrice = gasolinePrice - 0.18;
        }else if (fuelType === "Diesel"){
            dieselPrice = dieselPrice - 0.12;
        }else if( fuelType === "Gas"){
            gasPrice = gasPrice - 0.08;
        }
    } 
    
    if(fuelType === "Gasoline"){
        finalPrice = gasolinePrice * quantityFuel;
    }else if ( fuelType ==="Diesel"){
        finalPrice = dieselPrice * quantityFuel;
    }else if( fuelType === "Gas"){
        finalPrice = gasPrice * quantityFuel;
    }
    if (quantityFuel >= 20 && quantityFuel <= 25){
        finalPrice -= 0.08 * finalPrice;
    }else if (quantityFuel > 25){
        finalPrice -= 0.10 * finalPrice;
    }
    console.log(`${finalPrice.toFixed(2)} lv.`)
}
fuelTankPart2(["Gas", 30, "Yes"]);