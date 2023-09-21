function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);
    let price = 0;
    if (season === "Spring") {
        price = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;
    } else {
        price = 2600;
    }
    if (count <= 6) {
        price *= 0.90;
    } else if (count > 6 && count <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    } if (count % 2 == 0 && season !== "Autumn") {
        price *= 0.95;
    }
    let difference = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"]);