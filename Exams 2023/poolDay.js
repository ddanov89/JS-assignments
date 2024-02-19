function poolDay (input){
    let peopleCount = Number(input[0]);
    let entranceFee = Number(input[1]);
    let chair = Number(input[2]);
    let umbrella = Number(input[3]);
    let totalEntrancePrice = entranceFee * peopleCount;
    let chairPrice = Math.ceil(peopleCount * 0.75);
    let chairPriceSum = chairPrice * chair;
    let umbrellaPrice = Math.ceil(peopleCount * 0.50);
    let umbrellaPriceSum = umbrellaPrice * umbrella;
    let totalPrice = totalEntrancePrice + chairPriceSum + umbrellaPriceSum;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
poolDay(["50", "6", "8", "4"]);