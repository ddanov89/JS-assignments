function petShop(input){
    let boxDog = Number(input[0]);
    let boxCat = Number(input[1]);
    let price = 2.50 * boxDog + 4 * boxCat;
    console.log(`${price} lv`);
}
petShop([3, 2]);