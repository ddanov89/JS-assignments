function vegetableMarket(input){
    let vegetables = Number(input[0]);
    let fruits = Number(input[1]);
    let sumVegetables = Number(input[2]);
    let sumFruits = Number(input[3]);
    let priceVegetables = vegetables * sumVegetables;
    let priceFruits = fruits * sumFruits;
    let totalMoneyFromSale = priceFruits + priceVegetables;
    let euro = 1.94;
    let euroConversion = totalMoneyFromSale / euro;   
    console.log(euroConversion.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10]);