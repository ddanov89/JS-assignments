function movieTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTicket = 0;
    while (command !== "Finish"){
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let sellTicketCount = 0;
        while(ticketType !== "End"){
            sellTicketCount++;
            switch(ticketType){
                case "student": studentTicket++; break;
                case "standard": standardTicket++; break;
                case "kid": kidTicket++; break;
            }
            if (sellTicketCount == freeSpace){
                break;
            }
            ticketType = input[index];
            index++;
        }
        totalTicket += sellTicketCount;
        let percentageFull = sellTicketCount / freeSpace * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        command  = input[index];
        index++;
    }
    let percentageStudentTicket = studentTicket / totalTicket * 100;
    let percentageStandardTicket = standardTicket / totalTicket * 100;
    let percentageKidsTicket = kidTicket / totalTicket * 100;
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidsTicket.toFixed(2)}% kids tickets.`);
}
movieTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);