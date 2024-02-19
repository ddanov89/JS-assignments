function minutesPlusFifteen(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let newMinutes = minutes + 15;

    if (newMinutes > 59) {
        newMinutes -= 60;
        hours++;
    }
    if(newMinutes <= 9){
        newMinutes = `0${newMinutes}`;
    }
    if ( hours > 23) {
        hours = hours % 24;
    }
    console.log(`${hours}:${newMinutes}`);
}
minutesPlusFifteen(["12", "49"]);