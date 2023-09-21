function familyTrip(input) {
    let budget = Number(input[0]);
    let totalNights = Number(input[1]);
    let nightsPrice = Number(input[2]);
    let additionalExpenses = Number(input[3]);
    let totalPriceNights = 0;
    let nightsPriceWithDiscount = 0;
    let finalPrice = 0;

    if (totalNights > 7) {
        nightsPriceWithDiscount = nightsPrice - (nightsPrice * 0.05);
        totalPriceNights = nightsPriceWithDiscount * totalNights;
        expenses = budget * additionalExpenses / 100;
        finalPrice = totalPriceNights + expenses;
    } else {
        totalPriceNights = totalNights * nightsPrice;
        expenses = budget * additionalExpenses / 100;
        finalPrice = totalPriceNights + expenses;
    }
    if (finalPrice <= budget){
        console.log(`Ivanovi will be left with ${(budget - finalPrice).toFixed(2)} leva after vacation.`);
    }else if (finalPrice > budget){
        console.log(`${(finalPrice - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["500", "7", "66", "15"]);