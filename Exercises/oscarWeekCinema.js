function oscarWeekInCinema(input) {
    let name = input[0];
    let hall = input[1];
    let ticketCount = Number(input[2]);
    let income = 0;
    if (hall === "normal") {
       if (name === "A Star Is Born") {
          income = ticketCount * 7.50;
       } else if (name === "Bohemian Rhapsody") {
          income = ticketCount * 7.35;
       } else if (name === "Green Book") {
          income = ticketCount * 8.15;
       } else if (name === "The Favourite") {
          income = ticketCount * 8.75;
       }
    }else if (hall === "luxury"){
       if (name === "A Star Is Born"){
          income = ticketCount * 10.50;
       }else if (name === "Bohemian Rhapsody"){
          income = ticketCount * 9.45;
       }else if (name === "Green Book"){
          income = ticketCount * 10.25;
       }else if ( name === "The Favourite"){
          income = ticketCount * 11.55;
       }
    }else if (hall === "ultra luxury"){
       if (name === "A Star Is Born"){
          income = ticketCount * 13.50;
       }else if (name === "Bohemian Rhapsody"){
          income = ticketCount * 12.75;
       }else if( name === "Green Book"){
          income = ticketCount * 13.25;
       }else if (name === "The Favourite"){
          income = ticketCount * 13.95;
       }
    }
    console.log(`${name} -> ${income.toFixed(2)} lv.`);
 }
 oscarWeekInCinema(["A Star Is Born", "luxury", "42"]); 