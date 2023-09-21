function dishwasher(input){
    let bottlesDetergent = Number(input[0]);
    let index = 1;
    let availableDetergent = bottlesDetergent * 750;
    let usedDetergent = 0;
    let plates = 0;
    let pots = 0;
    while (input[index] !== "End"){
        if (index % 3 !== 0){
            usedDetergent += input[index] * 5;
            plates += Number(input[index]);
        } else {
            usedDetergent += input[index] * 15;
            pots += Number(input[index]);
        }
        index++;
        if (usedDetergent > availableDetergent){
            console.log(`Not enough detergent, ${usedDetergent - availableDetergent} ml. more necessary!`);
            break;
        }
    }
    if(usedDetergent <= availableDetergent){
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${availableDetergent - usedDetergent} ml.`);
    }
}
dishwasher([2, 53, 65, 55, "End"]);