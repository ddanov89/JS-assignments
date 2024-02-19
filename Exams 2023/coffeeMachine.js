function coffeeMachine(input) {
    let beverageType = input[0];
    let sugar = input[1];
    let beverageCount = Number(input[2]);
    let beveragePrice = 0;
    let finalPrice = 0;
    let total = 0;
    let discount = 0;
    if (beverageType === "Espresso") {
        if (sugar === "Without") {
            beveragePrice = beverageCount * 0.90; // 9
            discount = beveragePrice * 0.35; //3.15
            finalPrice = beveragePrice - discount; // 5.85
        } else if (sugar === "Normal") {
            beveragePrice = beverageCount * 1;
            finalPrice = beveragePrice;
        } else if (sugar === "Extra") {
            beveragePrice = beverageCount * 1.20;
            finalPrice = beveragePrice;
        }
        if (beverageCount >= 5) {
            discount = finalPrice * 0.25; // 1.4625
            finalPrice = finalPrice - discount; //4.39
        }
        if (finalPrice > 15) {
            finalPrice = finalPrice - finalPrice * 0.20;
        }
    }
    if (beverageType === "Cappuccino") {
        if (sugar === "Without") {
            beveragePrice = beverageCount * 1;
            discount = beveragePrice * 0.35;
            finalPrice = beveragePrice - discount;

        } else if (sugar === "Normal") {
            beveragePrice = beverageCount * 1.20;
            finalPrice = beveragePrice;
        } else if (sugar === "Extra") {
            beveragePrice = beverageCount * 1.60;
            finalPrice = beveragePrice;
        }
        if (beveragePrice > 15) {
            finalPrice = beveragePrice - beveragePrice * 0.20;
        }
    } else if (beverageType === "Tea") {
        if (sugar === "Without") {
            beveragePrice = beverageCount * 0.50;
            discount = beveragePrice * 0.35;
            finalPrice = beveragePrice - discount;
        } else if (sugar === "Normal") {
            beveragePrice = beverageCount * 0.60;
            finalPrice = beveragePrice;
        } else if (sugar === "Extra") {
            beveragePrice = beverageCount * 0.70;
            finalPrice = beveragePrice;
        }
        if (finalPrice > 15) {
            finalPrice = finalPrice - finalPrice * 0.20;
        }
    }
    console.log(`You bought ${beverageCount} cups of ${beverageType} for ${finalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Tea",
"Extra",
"3"]);