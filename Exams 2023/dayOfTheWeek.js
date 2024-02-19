function dayOfTheWeek (input){
    let hour = Number(input[0]);
    let day = input[1];
    if (day === "Monday" || day ==="Tuesday" || day === "Friday"){
        if (hour <= 10 || hour <=18){
            console.log("open");
        } else {
            console.log("closed");
        }
    }else if (day === "Wednesday" || day === "Thursday"){
        if (hour <= 10 || hour <= 18){
            console.log("open");
        }else {
            console.log("closed");
        }
    }else if (day === "Saturday" || day === "Sunday"){
        if(hour <= 10 && hour <= 18){
            console.log("open");
        }else {
            console.log("closed");
        }
    }
}
dayOfTheWeek(["11", "Sunday"]);