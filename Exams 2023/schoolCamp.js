function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentCount = Number(input[2]);
    let nightCount = Number(input[3]);
    let totalPrice = 0;
    let hotelStayPricePerPerson = 0;
    let sportType = "";
    if (season === "Winter") {
        if (groupType === "girls" || groupType === "boys") {
            if (groupType === "girls"){
                sportType = "Gymnastics";
            }else if( groupType === "boys"){
                sportType = "Judo";
            }
            hotelStayPricePerPerson = 9.60;
        } else if (groupType === "mixed") {
            sportType = "Ski"
            hotelStayPricePerPerson = 10;
        }
    } else if (season === "Spring") {
        if (groupType === "girls" || groupType === "boys") {
            if (groupType === "girls"){
                sportType = "Athletics";
            }else if( groupType === "boys"){
                sportType = "Tennis";
            }
            hotelStayPricePerPerson = 7.20;
        } else if (groupType === "mixed") {
            sportType = "Cycling";
            hotelStayPricePerPerson = 9.50;
        }
    } else if (season === "Summer") {
        if (groupType === "girls" || groupType === "boys") {
            if (groupType === "girls"){
                sportType = "Volleyball";
            }else if( groupType === "boys"){
                sportType = "Football";
            }
            hotelStayPricePerPerson = 15;
        } else if (groupType === "mixed") {
            sportType = "Swimming";
            hotelStayPricePerPerson = 20;
        }
    }
    totalPrice = hotelStayPricePerPerson * studentCount * nightCount;
    if (studentCount >= 50){
        totalPrice *= 0.50;
    }else if (studentCount >= 20 && studentCount < 50){
        totalPrice *= 0.85;
    }else if ( studentCount >= 10 && studentCount < 20){
        totalPrice *= 0.95;
    }
    console.log(`${sportType} ${totalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", 20, 7]);