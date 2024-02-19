function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
    } else if(budget <= 1000){
        console.log("Somewhere in Balkans");
    }else {
        console.log("Somewhere in Europe");  
    }
}
journey(["50", "Summer"]);