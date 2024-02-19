function movie(input){
    let type = input[0];
    let rows = Number(input[1]);
    let colomns = Number(input[2]);
    let totalIncome = 0;
    if (type === "Premiere"){
        totalIncome = rows * colomns * 12.0;
    }else if (type === "Normal"){
        totalIncome = rows * colomns * 7.50;
    }else if (type === "Discount"){
        totalIncome = rows * colomns * 5.00;
    }
    console.log(`${totalIncome.toFixed(2)} leva`);
}