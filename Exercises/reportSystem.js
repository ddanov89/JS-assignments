function reportSystem(input) {
    let sumNeeded = Number(input[0]);
    let index = 1;
    let sumCard = 0;
    let sumCash = 0;
    let isPayedWithCash = true;
    let totalSum = 0;
    let cashCounter = 0;
    let cardCounter = 0;
    let productPrice = input[index];
    while (input[index] !== "End") {
        if (productPrice > 100 && isPayedWithCash) {
            console.log("Error in transaction!");
        } else if (productPrice < 10 && !isPayedWithCash) {
            console.log("Error in transaction!");
        } else {
            console.log("Product sold");
            if (isPayedWithCash) {
                sumCash += Number(input[index]);
                cashCounter++;
            } else {
                sumCard += Number(input[0]);
                cardCounter++;
            }
        }
        totalSum = sumCard + sumCash;
        if (totalSum >= sumNeeded) {
            console.log(`Average CS: ${(sumCash / cashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(sumCard / cardCounter).toFixed(2)}`);
            break;
        }
        index++;
        productPrice = input[index];
        if(isPayedWithCash){
            isPayedWithCash = false;
        }else {
            isPayedWithCash = true;
        }
    }
    if (totalSum < sumNeeded){
        console.log("Failed to collect required money for charity");
    }
}
reportSystem([500, 120, 8, 63, 256, 78, 317]);