function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let note = input[2];
    let nights = days - 1;
    let price = 0;
    if (room === "room for one person") {
        price = nights * 18;
    } else if (room === "apartment") {
        price = nights * 25;
        if (nights < 10) {
            price *= 0.70;
        } else if (nights >= 10 && nights < 15) {
            price *= 0.65;
        } else {
            price *= 0.5;
        }
    } else if (room === "president apartment") {
        price = nights * 35;
        if (nights < 10) {
            price *= 0.9;
        } else if (nights > 10 && nights < 15) {
            price *= 0.85;
        } else if( nights > 15){
            price *= 0.8;
        }
    }
    if (note === "positive") {
        price = price * 0.25 + price;
    } else if (note === "negative") {
        price = price - 0.1 * price;}
    console.log(`${price.toFixed(2)}`);
}
skiTrip(["14", "apartment", "positive"]);