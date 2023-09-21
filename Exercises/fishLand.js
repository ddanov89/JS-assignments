function fishLand(input){
    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let bonitoPrice = mackerel + mackerel * 0.60;
    let bonito = Number(input[2]);
    let bonitoSum = bonitoPrice * bonito;
    let safrid = Number(input[3]);
    let safridPrice = sprat + sprat * 0.80;
    let safridSum = safrid * safridPrice;
    let mussels = Number(input[4]);
    let musselsSum = mussels * 7.50;
    let total = (bonitoSum + safridSum + musselsSum).toFixed(2);
    console.log(total);
}
fishLand([6.90, 4.20, 1.5, 2.5, 1]);