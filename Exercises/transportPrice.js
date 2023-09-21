function transportPrice (input){
    let distance = Number(input[0]);
    let timeOfDay = input[1];
    fareDay = 0.79;
    fareNight = 0.90;
    fareBus = 0.09;
    fareTrain = 0.06;
    if (distance < 20){
        if( timeOfDay === "day"){
            tripFare = 0.70 + distance * fareDay;
        }else if (timeOfDay === "night"){
            tripFare = 0.70 + distance * fareNight;
        }
    }else if(distance <= 99){
        tripFare = distance * fareBus;
    }else if(distance >= 100){
        tripFare = distance * fareTrain;
    }
    console.log(tripFare.toFixed(2));
}
transportPrice([100, "night"]);