function excursionCalculator (input){
    let peopleCount = Number(input[0]);
    let season = input[1];
    let peoplePricePerPerson = 0;
    if (season === "spring"){
        if(peopleCount <= 5){
            peoplePricePerPerson = peopleCount * 50.00;
        }else if (peopleCount > 5){
            peoplePricePerPerson = peopleCount * 48.00;
        }
    }else if ( season === "summer"){
        if(peopleCount <= 5){
            peoplePricePerPerson = peopleCount * 48.50;
            peoplePricePerPerson -= peoplePricePerPerson * 0.15;
        }else if (peopleCount > 5){
            peoplePricePerPerson = peopleCount * 45.00;
            peoplePricePerPerson -= peoplePricePerPerson * 0.15;
        }
    }else if ( season === "autumn"){
        if(peopleCount <= 5){
            peoplePricePerPerson = peopleCount * 60.00;
        }else if (peopleCount > 5){
            peoplePricePerPerson = peopleCount * 49.50;
        }
    }else if (season === "winter"){
        if(peopleCount <= 5){
            peoplePricePerPerson = peopleCount * 86.00;
            peoplePricePerPerson += peoplePricePerPerson * 0.08;
        }else if (peopleCount > 5){
            peoplePricePerPerson = peopleCount * 85.00;
            peoplePricePerPerson += peoplePricePerPerson * 0.08;
        }
    }
    console.log(`${peoplePricePerPerson.toFixed(2)} leva.`);
}
excursionCalculator([5, "spring"]);