function pets(input){
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]);
    dogFoodNeeded = days * dogFood;
    catFoodNeeded = days * catFood;
    turtleFoodNeeded = days * turtleFood * 0.0001* 10;
    totalFoodNeeded = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded;
    if(foodLeft >= totalFoodNeeded){
        console.log(`${Math.floor(foodLeft - totalFoodNeeded)} kilos of food left.`);
    }else if ( foodLeft < totalFoodNeeded){
        console.log(`${Math.ceil(totalFoodNeeded - foodLeft)} more kilos of food are needed.`);
    }
}
pets([5, 10, 2.1, 0.8, 321]);