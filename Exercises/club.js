function club (input){
    let clubDesiredIncome = Number(input[0]);
    let index = 1
    let cocktailSinglePrice = 0;
    let cocktailPrice = 0;
    let cocktailCount = 0;
    let sumTotal = 0;
 
    while(input[index] !== "Party!"){
       cocktailSinglePrice = input[index].length;
       cocktailCount = Number(input[index + 1]);
       cocktailPrice = cocktailCount * cocktailSinglePrice;
    
       if (cocktailPrice % 2 === 1){
          cocktailPrice -= cocktailPrice * 0.25;
       }
       index += 2;
       sumTotal += cocktailPrice;

       if (sumTotal >= clubDesiredIncome){
        break;
     }
    }
    
    if (sumTotal >= clubDesiredIncome){
       console.log("Target acquired.");
    }else if (input[index] == "Party!"){
       console.log(`We need ${(clubDesiredIncome - sumTotal).toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${sumTotal.toFixed(2)} leva.`);
 }
 club(["100",
 "Sidecar",
 "7",
 "Mojito",
 "5",
 "White Russian",
 "10"]);