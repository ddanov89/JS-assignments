function movieDestination(input){
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);
    let price = 0;
    let total = 0;
    if ( season === "Winter"){
       if ( destination === "Dubai"){
          price = daysCount * 45000;
          total = price - price * 0.30;
       }else if (destination === "Sofia"){
          price = daysCount * 17000;
          total = price + price * 0.25;
       }else if (destination === "London"){
          total = daysCount * 24000;
       }
    }else if( season === "Summer"){
       if( destination === "Dubai"){
          price = daysCount * 40000;
          total = price - price * 0.30;
       }else if (destination === "Sofia"){
          price = daysCount * 12500;
          total = price + price * 0.25;
       }else if (destination === "London"){
          total = daysCount * 20250;
       }
    }
    if (total >= budget){
       console.log(`The director needs ${(total - budget).toFixed(2)} leva more!`);
    }else if (total < budget){
       console.log(`The budget for the movie is enough! We have ${(budget - total).toFixed(2)} leva left!`);
    }
 }
movieDestination(["1000000",
"Dubai",
"Summer",
"5"]);