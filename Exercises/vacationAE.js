function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let vacationPrice = 0;
    let location = "";
    let placeOfStay = "";
    if (budget <= 1000){
        placeOfStay = "Camp";
        if (season === "Summer"){
            location = "Alaska";
            vacationPrice = budget * 0.65;
        }else if ( season === "Winter"){
            location = "Morocco";
            vacationPrice = budget * 0.45;
        }
    }else if ( budget > 1000 && budget <= 3000){
        placeOfStay = "Hut";
        if (season === "Summer"){
            location = "Alaska";
            vacationPrice = budget * 0.80;
        }else if ( season === "Winter"){
            location = "Morocco";
            vacationPrice = budget * 0.60;
        }
    }else if( budget > 3000){
        placeOfStay = "Hotel";
        vacationPrice = budget * 0.90;
        if( season === "Summer"){
            location = "Alaska";
        }else if ( season === "Winter"){
            location = "Morocco";
        }
    }
    console.log(`${location} - ${placeOfStay} - ${vacationPrice.toFixed(2)}`);
}
vacation([799.50, "Winter"]);