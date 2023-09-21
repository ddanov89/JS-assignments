function backToThePast (input){
    let inheritanceMoney = Number(input[0]);
    let yearLiveTo = Number(input[1]);
    let age = 18;
    let spendMoney = 0;
    let moneyLeft = 0;
    let moneySpent = 0;
    for( let i = 1800; i <= yearLiveTo; i++){
        if(i % 2 === 0){
            spendMoney = 12000;
        }else if (i % 2 === 1){
            spendMoney = 12000 + 50 * age;
        }
        moneySpent += spendMoney ;
        age++;
    }
    moneyLeft = inheritanceMoney - moneySpent;
    if (moneySpent <= inheritanceMoney){
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    }else if (moneySpent > inheritanceMoney){
        console.log(`He will need ${(moneySpent - inheritanceMoney).toFixed(2)} dollars to survive.`);
    }
}
backToThePast([100000.15, 1808]);