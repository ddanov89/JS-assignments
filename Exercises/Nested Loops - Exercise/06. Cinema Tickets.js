function cinemaTicket (input){
    let index = 0;
    let command = input[index];
    index++;
    let countStudentTicket = 0;
    let countStandardTicket = 0;
    let countKidsTicket = 0;
    let countTotalTicket = 0;

    while (command !== "Finish"){
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let countSellTicket = 0;
        while (ticketType !== "End"){
            countSellTicket++;
            switch (ticketType){
                case "student": countStudentTicket++; break;
                case "standard": countStandardTicket++; break;
                case "kid": countKidsTicket++; break;
            }
            if (countSellTicket == freeSpace){
                break;
            }
            ticketType = input[index];
            index++;
        }
        countTotalTicket += countSellTicket;
        let percentageFull = countSellTicket / freeSpace * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    let percentageStudentTicket = countStudentTicket / countTotalTicket * 100;
    let percentageStandardTicket = countStandardTicket / countTotalTicket * 100;
    let percentageKidsTicket = countKidsTicket / countTotalTicket * 100;

    console.log(`Total tickets: ${countTotalTicket}`);
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidsTicket.toFixed(2)}% kids tickets.`);
}
cinemaTicket(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);