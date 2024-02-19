function bestPlayer (input){
    let playerName = input[0];
    let index = 0;
    let goalCount = Number(input[index + 1]);
    let bestPlayerName = playerName;
    let bestPlayerGoalCount = goalCount;
    index += 2;
    while (input[index] !== "END"){
        if (Number(input[index + 1]) > bestPlayerGoalCount){
            bestPlayerGoalCount = Number(input[index + 1]);
            bestPlayerName = input[index];
        }
        if ( bestPlayerGoalCount >= 10){
            break;
        }
        index += 2;
    }
    console.log(`${bestPlayerName} is the best player!`);
    if ( bestPlayerGoalCount >= 3){
        console.log(`He has scored ${bestPlayerGoalCount} goals and made a hat-trick !!!`);
    }else {
        console.log(`He has scored ${bestPlayerGoalCount} goals.`);
    }
}
bestPlayer(["Silva", 5,"Harry Kane", 11]);