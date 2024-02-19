function flower(input){
    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let flowerPriceChrysanthemums = 0;
    let flowerPriceRoses = 0;
    let flowerPriceTulips = 0;
    let total = 0;
    let totalFlowers = chrysanthemumsCount + rosesCount + tulipsCount;
    let singleChrysanthemumsPrice = 0;
    let singleRosesPrice = 0;
    let singleTulipsPrice = 0;

    if(season === "Spring" || season === "Summer"){
        singleChrysanthemumsPrice = 2.00;
        singleRosesPrice = 4.10;
        singleTulipsPrice = 2.50;
        if (holiday === "Y"){
            singleChrysanthemumsPrice = singleChrysanthemumsPrice * 0.15 + singleChrysanthemumsPrice;
            singleRosesPrice = singleRosesPrice * 0.15 + singleRosesPrice;
            singleTulipsPrice = singleTulipsPrice * 0.15 + singleTulipsPrice;
        }
        flowerPriceRoses = rosesCount * singleRosesPrice;
        flowerPriceTulips = tulipsCount * singleTulipsPrice;
        flowerPriceChrysanthemums = chrysanthemumsCount * singleChrysanthemumsPrice;
        total = flowerPriceChrysanthemums + flowerPriceRoses + flowerPriceTulips;
        if (tulipsCount > 7 && season === "Spring"){
            total *= 0.95;
        }
    }else if (season === "Winter" || season === "Autumn"){
        singleChrysanthemumsPrice = 3.75;
        singleRosesPrice = 4.50;
        singleTulipsPrice = 4.15;
        if ( holiday === "Y"){
            singleChrysanthemumsPrice = singleChrysanthemumsPrice * 0.15 + singleChrysanthemumsPrice;
            singleRosesPrice = singleRosesPrice * 0.15 + singleRosesPrice;
            singleTulipsPrice = singleTulipsPrice * 0.15 + singleTulipsPrice;
        }
        flowerPriceRoses = rosesCount * singleRosesPrice;
        flowerPriceTulips = tulipsCount * singleTulipsPrice;
        flowerPriceChrysanthemums = chrysanthemumsCount * singleChrysanthemumsPrice;
        total = flowerPriceChrysanthemums + flowerPriceRoses + flowerPriceTulips;
        if (rosesCount >= 10 && season === "Winter"){
            total *= 0.90;
        }
    }
    if (totalFlowers > 20){
        total *= 0.80;
    }
    console.log(`${(total+ 2).toFixed(2)}`);
}
flower([10, 10, 10, "Autumn","N"]);