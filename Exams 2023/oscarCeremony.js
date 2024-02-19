function oscarCeremony(input){
    let rent = Number(input[0]);
    let statuesPrice = rent * 0.70;
    let cateringPrice = statuesPrice * 0.85;
    let sound = cateringPrice * 0.50;
    let total = statuesPrice + cateringPrice + sound + rent;
    console.log(total.toFixed(2));
}
oscarCeremony([3500]);