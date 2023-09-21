function filmPremier(input){
    let movieName = input[0];
    let moviePack = input[1];
    let ticketCount = Number(input[2]);
    let ticketPrice = 0;
    let total = 0;
    if(movieName === "John Wick"){
       if (moviePack === "Drink"){
          ticketPrice = ticketCount * 12;
       }else if ( moviePack === "Popcorn"){
          ticketPrice = ticketCount * 15;
       }else if (moviePack === "Menu"){
          ticketPrice = ticketCount * 19;
       }
    }else if( movieName === "Star Wars") {
       if (moviePack === "Drink"){
          ticketPrice = ticketCount * 18;
       }else if ( moviePack === "Popcorn"){
          ticketPrice = ticketCount * 25;
       }else if ( moviePack === "Menu"){
          ticketPrice = ticketCount * 30;
       }
       if (ticketCount >= 4){
        ticketPrice = ticketPrice - ticketPrice * 0.30;
       }
    }else if ( movieName === "Jumanji"){
       if (moviePack === "Drink"){
          ticketPrice = ticketCount * 9;
       }else if (moviePack === "Popcorn"){
          ticketPrice = ticketCount * 11;
       }else if (moviePack === "Menu"){
          ticketPrice = ticketCount * 14;
       }
       if (ticketCount == 2){
       ticketPrice = ticketPrice - ticketPrice * 0.15;
       }
    }
    console.log(`Your bill is ${ticketPrice.toFixed(2)} leva.`);
 }
 filmPremier(["Star Wars",
 "Popcorn",
 "3"]);