function oscars(input){
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let judgeName = "";
    let judgePoints = 0;
    let JudgeTotalPoints = 0;
    let totalActorPoints = startingPoints;
    for (let index = 3; index < judgesCount * 2 + 2; index += 2) {
        judgeName = input[index];
        judgePoints = Number(input[index + 1]);
        JudgeTotalPoints = judgeName.length * judgePoints / 2;
        totalActorPoints += JudgeTotalPoints;
        if (totalActorPoints >= 1250.5){
            break;
        }
    }
    if (totalActorPoints < 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalActorPoints).toFixed(1)} more!`);
    }else if( totalActorPoints >= 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalActorPoints.toFixed(1)}!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);