function flowerShop(input){
    let magnolias = Number(input[0]);
    let hyacinth = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let giftPrice = Number(input[4]);
    total = magnolias * 3.25 + hyacinth * 4 + roses * 3.5 + cacti * 8;
    tax = total * 0.05;
    incomeMinusTax = total - tax;
    if(incomeMinusTax >= giftPrice){
        console.log(`She is left with ${Math.floor((incomeMinusTax - giftPrice))} leva.`);
    }else if (incomeMinusTax < giftPrice){
        console.log(`She will have to borrow ${Math.ceil(giftPrice - incomeMinusTax)} leva.`);
    }
}
flowerShop([2, 3, 5, 1, 50]);