function onTimeForExam(input){
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);
    let timeExam = hoursExam * 60 + minExam;
    let timeArrive = hoursArrive * 60 + minArrive;
    let difference = Math.abs(timeExam - timeArrive);
    let hours = Math.floor(difference / 60);
    let min = difference % 60;

    if(timeArrive < timeExam && (difference > 30)){
        console.log("Early");
        if (hours > 0) {
            if (min < 10){
                console.log(`${hours}:0${min} hours before the start`);
            } else{
                console.log(`${hours}:${min} hours before the start`);
            }
        }else {
            console.log(`${min} minutes before the start`);
        }
    }else if(timeArrive <= timeExam){
        console.log("On time");
        if(min > 0){
            console.log(`${min} minutes before the start`);
        }
    }else {
        console.log("Late");
        if(hours > 0){
            if (min < 10){
                console.log(`${hours}:0${min} hours after the start`);
            }else {
                console.log(`${hours}:${min} hours after the start`)
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    }
}
onTimeForExam([9, 30, 9, 50]);