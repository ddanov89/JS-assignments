function bills (input){
    let months = Number(input[0]);
    let electricitySum = 0;
    let waterSum = months * 20;
    let internetSum = months * 15;
    let otherSum = 0;
    let tempOther = 0;
    let average = 0;
    for ( let i = 1; i <= months; i++){
        electricitySum += Number(input[i]);
        tempOther = Number(input[i]) + 20 + 15;
        otherSum += tempOther + tempOther * 0.20;
    }
    console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
    console.log(`Water: ${waterSum.toFixed(2)} lv`);
    console.log(`Internet: ${internetSum.toFixed(2)} lv`);
    console.log(`Other: ${otherSum.toFixed(2)} lv`);
    console.log(`Average: ${((electricitySum + waterSum + internetSum + otherSum) / months).toFixed(2)} lv`);
}
bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);