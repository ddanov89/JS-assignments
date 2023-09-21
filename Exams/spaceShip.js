function spaceShip (input){
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let averageAstronautHeight = Number(input[3]);
    let shipCapacity = shipWidth * shipLength * shipHeight;
    let roomCapacity = (averageAstronautHeight + 0.40) * 2 * 2;
    let peopleCount = Math.floor(shipCapacity / roomCapacity);
    if (peopleCount >= 3 && peopleCount <= 10){
        console.log(`The spacecraft holds ${peopleCount} astronauts.`);
    }else if ( peopleCount < 3){
        console.log("The spacecraft is too small.");
    }else if (peopleCount > 10){
        console.log("The spacecraft is too big.");
    }
}
spaceShip(["3",
"3",
"4",
"1.68"]);