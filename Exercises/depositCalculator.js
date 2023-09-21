function deposit(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let apr = Number(input[2]);
    let finalSum = depositSum + period * ((depositSum * apr / 100) / 12);
    console.log(finalSum.toFixed(2));
}
deposit(["2700", "12","38.5"]);