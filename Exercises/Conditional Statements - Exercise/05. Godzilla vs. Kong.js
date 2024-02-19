function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let pricePerPerson = Number(input[2]);
    let decorPrice = budget * 0.10;
    let extrasTotal = extras * pricePerPerson;
    if (extras > 150) {
        extrasTotal *= 0.90;
    }
    let totalPrice = decorPrice + extrasTotal;
    if (budget >= totalPrice) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}
godzillaVsKong(["20000", "120", "55.5"]);