function worldSnookerChampionShip (input){
    let stage = input[0];
    let type = input[1];
    let ticketCount = Number(input[2]);
    let pictureWithTrophy = input[3];
    
    let totalPrice = 0;
    let isNeedPictureWithTrophy = true;
    switch(stage){
        case "Quarter final": 
        switch (type){
            case "Standard":totalPrice = ticketCount * 55.50; break;
            case "Premium": totalPrice = ticketCount * 105.20; break;
            case "VIP": totalPrice = ticketCount * 118.90; break;
        }
        break;
        case "Semi final":  
        switch (type){
            case "Standard":totalPrice = ticketCount * 75.88; break;
            case "Premium": totalPrice = ticketCount * 125.22; break;
            case "VIP": totalPrice = ticketCount * 300.40; break;
        } 
        break;
        case "Final": 
        switch (type){
            case "Standard":totalPrice = ticketCount * 110.10; break;
            case "Premium": totalPrice = ticketCount * 160.66; break;
            case "VIP": totalPrice = ticketCount * 400; break;
        }  
        break;
    }
    if (totalPrice > 4000){
        totalPrice *= 0.75;
        isNeedPictureWithTrophy = false;
    }else if (totalPrice > 2500){
        totalPrice *= 0.90;
    }
    if (pictureWithTrophy === "Y" && isNeedPictureWithTrophy){
        totalPrice += 40 * ticketCount;
    }
    console.log(totalPrice.toFixed(2));
}
worldSnookerChampionShip(["Semi final", "VIP", 9, "Y"]);