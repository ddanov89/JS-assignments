function matchTickets(input){
    let budget = Number(input[0]);
    let categoryTicket = input[1];
    let peopleCount = Number(input[2]);
    let ticketPrice = 0;
    let totalCost = 0;
    let ticketPriceForGroup = 0;
    let transportCost = 0;
    if (categoryTicket === "Normal"){
        ticketPrice = 249.99;
        if (peopleCount <= 4){
            transportCost = budget * 0.75;
        }else if (peopleCount <= 9){
            transportCost = budget * 0.60;
        }else if (peopleCount <= 24){
            transportCost = budget * 0.50;
        }else if (peopleCount <= 49){
            transportCost = budget * 0.40;
        }
        else if ( peopleCount > 50){
            transportCost = budget * 0.25;
        }
    }else if (categoryTicket === "VIP"){
        ticketPrice = 499.99;
        if (peopleCount <= 4){
            transportCost = budget * 0.75;
        }else if (peopleCount <= 9){
            transportCost = budget * 0.60;
        }else if (peopleCount <= 24){
            transportCost = budget * 0.50;
        }else if (peopleCount <= 49){
            transportCost = budget * 0.40;
        }
        else if ( peopleCount > 50){
            transportCost = budget * 0.25;
        }
    }
    ticketPriceForGroup = peopleCount * ticketPrice;
    totalCost = ticketPriceForGroup + transportCost;
    if (budget >= totalCost){
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`);
    }else if (budget < totalCost){
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`);
    }
}
matchTickets([1000, "Normal", 1]);