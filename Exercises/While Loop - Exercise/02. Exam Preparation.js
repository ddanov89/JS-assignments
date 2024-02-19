function examPreparation(input){
    let index = 1;
    let badGrades = 0;
    let goodGrades = 0;
    let sumGrades = 0;
    let lastTask = "";
    let command = input[index];
    let takeBreak = true;
    let problems = 0;
    while(badGrades < input[0]){
        command = input[index];
        if (command === "Enough"){
            lastTask = input[index - 2];
            let avg = (sumGrades /(goodGrades + badGrades)).toFixed(2);
            console.log("Average score: " + avg);
            console.log(`Number of problems: ${problems}`);
            console.log("Last problem: " + lastTask);
            takeBreak = false;
            break;
        }
        index++;
        let grade = Number(input[index]);
        
        if(grade > 4){
            goodGrades++;
            sumGrades += grade;
        }else {
            badGrades++;
            sumGrades += grade;
            if(badGrades == input[0]){
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        problems++;
        index++;
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);