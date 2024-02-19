function series (input){
    let budget = Number(input[0]);
    let seriesCount = Number(input[1]);
    let seriesName = "";
    let seriesPrice = 0;
    let seriesPriceTotal = 0;
    let budgetLeft = budget;
    for (let index = 2; index <= seriesCount * 2; index+=2){
        seriesName = input[index];
        seriesPrice = Number(input[index + 1]);
        if (seriesName === "Thrones"){
            seriesPrice = seriesPrice - seriesPrice * 0.50;
        }else if (seriesName === "Lucifer"){
            seriesPrice = seriesPrice - seriesPrice * 0.40;
        }else if ( seriesName === "Protector"){
            seriesPrice = seriesPrice - seriesPrice * 0.30;
        }else if (seriesName === "TotalDrama"){
            seriesPrice = seriesPrice - seriesPrice * 0.20;
        }else if ( seriesName === "Area"){
            seriesPrice = seriesPrice - seriesPrice * 0.10;
        }
        seriesPriceTotal += seriesPrice;
        budgetLeft -= seriesPrice;
    }
    if (budget >= seriesPriceTotal){
        console.log(`You bought all the series and left with ${(budget - seriesPriceTotal).toFixed(2)} lv.`);
    }else {
        console.log(`You need ${(seriesPriceTotal - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["10",
"3",
"Thrones",
"5",
"Riverdale",
"5",
"Gotham",
2]);