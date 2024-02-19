function reportSystem(input){
    let sumNeeded = Number(input[0]);
    let index = 1;
    let sumCards = 0;
    let sumCash = 0;
    let productPrice = input[index];
    let isPayedWithCash = true;
    let totalSum = 0;
    let cashCounter = 0;
    let cardCounter = 0;
    while (input[index] !== "End"){
        if (productPrice > 100 && isPayedWithCash){
            console.log("Error in transaction!");
        } else if (productPrice < 10 && !isPayedWithCash){
            console.log("Error in transaction!");
        }else {
            console.log("Product sold!");
            if (isPayedWithCash){
                sumCash += Number(input[index]);
                cashCounter++;
            }else {
                sumCards += Number(input[index]);
                cardCounter++;
            }
        }
        totalSum = sumCards + sumCash;
        if (totalSum >= sumNeeded ){
            console.log(`Average CS: ${(sumCash / cashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(sumCards / cardCounter).toFixed(2)}`);
            break;
        }
        index++;
        productPrice = input[index];
        if (isPayedWithCash){
            isPayedWithCash = false;
        }else{
            isPayedWithCash = true;
        }
    }
    if (totalSum < sumNeeded){
        console.log("Failed to collect required money for charity.");
    }
}
reportSystem([500, 120, 8, 63, 256, 78, 317]);