function programmingBook(input){
    let printPagePrice = Number(input[0]);
    let coverPagePrice = Number(input[1]);
    let discountPercentage = Number(input[2]);
    let designerPrice = Number(input[3]);
    let teamPercentagePaid = Number(input[4]);
    let printingSUm = printPagePrice * 899 + coverPagePrice * 2;
    let printingCost = printingSUm - printingSUm * discountPercentage / 100;
    let totalCost = printingCost + designerPrice;
    let finalPrice = totalCost - totalCost * teamPercentagePaid / 100;
    console.log(`Avtonom should pay ${finalPrice.toFixed(2)} BGN.`);
}
programmingBook(["0.02",
"0.50",
"18",
"21",
"50"]);
