function cleverLily(input){
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let birthDayMoneyPerYear = 10;

    for (let currentBirthday = 1; currentBirthday <= lilisAge; currentBirthday++){
        if ( currentBirthday % 2 === 0){
            savedMoney += birthDayMoneyPerYear;
            birthDayMoneyPerYear += 10;
            stolenMoney++;
        }else{
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * toyPrice;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;
    if (totalSavedMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    }else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);