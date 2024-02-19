function tennisRanklist(input){
    let tournamets = Number(input[0]);
    let startingPoints = Number(input[1]);
    let winPoints = 0;
    let tournametsWins = 0;
    for(let i = 2; i < input.length; i++){
        let currentStage = input[i];
        switch(currentStage){
            case "W": winPoints += 2000; tournametsWins++; break;
            case "F": winPoints += 1200; break;
            case "SF": winPoints += 720; break;
        }
    }
    let avgPoints = winPoints / tournamets;
    console.log(`Final points: ${startingPoints + winPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(tournametsWins / tournamets * 100).toFixed(2)}%`);
}
tennisRanklist([7, 1200, "SF", 'F', "W", "F", "W"]);