function harvest(input){
    let workingArea = Number(input[0]);
    let grapesForOneLiter = Number(input[1]);
    let wineLitersNeeded = Number(input[2]);
    let workers = Number(input[3]);
    totalGrapes = workingArea * grapesForOneLiter;
    wine = totalGrapes * 0.40 / 2.5;
    wineLeft = wine - wineLitersNeeded;
    if (wine < wineLitersNeeded){
        console.log(`It will be a tough winter! More ${Math.floor(wineLitersNeeded - wine)} liters wine needed.`);
    }else if (wine >= wineLitersNeeded){
        console.log(`Good harvest this year! Total wine: ${Math.ceil(wine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft / workers)} liters per person.`);
    }
}
harvest([650, 2, 175, 3]);