function traveling(input) {
 
    let firstDestination = input[0];
    let sumNeeded = Number(input[1]);
    let savings = 0;
    let index = 1;
 
    while(firstDestination !== "End"){
        index++;
 
        while(savings < sumNeeded){
            savings += Number(input[index]);
            index++
        }
        console.log(`Going to ${firstDestination}!`);
        firstDestination = input[index++];
        sumNeeded =Number(input[index]);
        savings = 0;
    }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);