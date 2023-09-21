function truckDriver(input) {
    let season = input[0];
    let kilometers = Number(input[1]);
    let salary = 0;
    let pricePerKilometer = 0;
    if (season === "Spring" || season === "Autumn") {
        if (kilometers <= 5000) {
            pricePerKilometer = 0.75;
        } else if (kilometers > 5000 && kilometers <= 10000) {
            pricePerKilometer = 0.95;
        }
    } else if (season === "Summer") {
        if (kilometers <= 5000) {
            pricePerKilometer = 0.90;
        } else if (kilometers > 5000 && kilometers <= 10000) {
            pricePerKilometer = 1.10;
        }
    } else if (season === "Winter") {
        if (kilometers <= 5000) {
            pricePerKilometer = 1.05;
        } else if (kilometers > 5000 && kilometers <= 10000) {
            pricePerKilometer = 1.25;
        }
    }
    if (kilometers > 10000 && kilometers <= 20000) {
        pricePerKilometer = 1.45;
    }
    salary = kilometers * pricePerKilometer * 0.90 * 4;
    console.log(`${salary.toFixed(2)}`);
}
truckDriver(["Spring", 1600]);