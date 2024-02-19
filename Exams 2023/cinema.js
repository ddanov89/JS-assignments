function cinema(input) {
    let hallCapacity = Number(input[0]);
    let index = 1;
    let peopleCount = 0;
    let ticketPrice = 5;
    let seatSum = 0;
    let income = 0;
    while (input[index] !== "Movie time!") {
        peopleCount = Number(input[index]);
        seatSum += Number(input[index]);
        if ((seatSum) > hallCapacity){
            break;
        }
        income += peopleCount * ticketPrice;
        if (peopleCount % 3 === 0) {
            income -= 5;
        }
        index++;
    }
    if (hallCapacity > seatSum || input[index] === "Movie time!") {
        console.log(`There are ${hallCapacity - seatSum} seats left in the cinema.`);
    } else {
        console.log("The cinema is full.");
    }
    console.log(`Cinema income - ${income} lv.`);
}
cinema(["50",
"15",
"10",
"10",
"15",
"5"]);
