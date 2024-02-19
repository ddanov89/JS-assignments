function christmasPreparations (input){
    let rollsPackingPaper = Number(input[0]);
    let rollsCloth = Number(input[1]);
    let litresGlue = Number(input[2]);
    let percentage = Number(input[3]);
    let rollsPackingPaperPrice = rollsPackingPaper * 5.80;
    let rollsClothPrice = rollsCloth * 7.20;
    let litresGluePrice = litresGlue * 1.20;
    let totalSum = rollsClothPrice + rollsPackingPaperPrice + litresGluePrice;
    let finalSum = totalSum - (totalSum * percentage / 100);
    console.log(finalSum.toFixed(3));
}
christmasPreparations([4, 2, 5, 13]);