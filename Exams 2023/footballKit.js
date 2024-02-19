function footballKit(input){
    let shirtPrice = Number(input[0]);
    let priceToWin = Number(input[1]);
    let pantsPrice = shirtPrice * 0.75;
    let socksPrice = pantsPrice * 0.20;
    let shoesPrice = (shirtPrice + pantsPrice) * 2;
    let totalSum = shirtPrice + pantsPrice + socksPrice + shoesPrice;
    let totalSUmPlusDiscount = totalSum - totalSum * 0.15;
    if (totalSUmPlusDiscount >= priceToWin){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSUmPlusDiscount.toFixed(2)} lv.`);
    } else if (totalSUmPlusDiscount < priceToWin){
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(priceToWin - totalSUmPlusDiscount).toFixed(2)} lv. more.`);
    }
}
footballKit([55, 100]);