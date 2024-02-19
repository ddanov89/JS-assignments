function movieStars(input){
    let budget = Number(input[0]);
    let index = 1;
    let actorName = "";
    let salary = 0;
    let totalSalary = 0;
    let remainingBudget = budget;
    while ( input[index] !== "ACTION"){
        actorName = input[index].length;
        if ( actorName > 15){
            salary = remainingBudget * 0.20;
            totalSalary += salary;
            index++;
        }else {
            salary = Number(input[index + 1]);
            totalSalary += salary;
            index+=2;
        }
        if (remainingBudget < salary){
            break;
        }
    
        if (input[index] == "ACTION"){
            remainingBudget = remainingBudget - salary;
            break;
        }else{
            remainingBudget = remainingBudget - salary;
        }
    }
    
    if (budget >= totalSalary){
        console.log(`We are left with ${(remainingBudget).toFixed(2)} leva.`);
    }else {
        console.log(`We need ${(salary - remainingBudget).toFixed(2)} leva for our actors.`);
    }
}
movieStars([2000000.5,
    "Jet Lee",
    1000000,
    "Jackie Chan",
    1000000,
    "ACTION"]);