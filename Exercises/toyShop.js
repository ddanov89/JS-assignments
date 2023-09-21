function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let truckPrice = trucks * 2;
    let total = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + truckPrice;
    let totalToys = puzzles + dolls + bears + minions + trucks;
    if (totalToys >= 50){
        total = total * 0.75;
    }
    total = total * 0.90;
    if(total >= tripPrice){
        console.log(`Yes! ${(total - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - total).toFixed(2)} lv needed.`);
    }
}
toyShop([40.8, 20, 25, 30, 50, 10]);