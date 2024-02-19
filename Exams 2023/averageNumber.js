function averageNumber(input) {
    let n = Number(input[0]);
    let average = 0;
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += Number(input[i]);
    }
    average = sum / n;
    console.log(average.toFixed(2));
}
averageNumber([4, 3, 2, 4, 2]);