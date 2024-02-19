function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let priceChicken = chickenMenu * 10.35;
    let priceFish = fishMenu * 12.40;
    let priceVegan = veganMenu * 8.15;
    let totalSumMenu = priceChicken + priceFish + priceVegan;
    let priceDessert = totalSumMenu * 20 / 100;
    let delivery = 2.50;
    let totalPrice = totalSumMenu + priceDessert + delivery;
    console.log(totalPrice);
    }
    foodDelivery([2, 4, 3]);