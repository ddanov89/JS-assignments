function christmasGifts(input){
    let index = 0;
    let age = 0;
    let adultCount = 0;
    let kidsCount = 0;
    let toyPrice = 5;
    let sweaterPrice = 15;
    let sweaterSumTotal = 0;
    let toysSumTotal = 0;
    while( input[index] !== "Christmas"){
        age = Number(input[index]);
        if (age <= 16){
            kidsCount++;
        }else if (age > 16){
            adultCount++;
        }
        if (input[index] === "Christmas"){
            break;
        }
        index++;
    }
    toysSumTotal += kidsCount * toyPrice;
    sweaterSumTotal += adultCount * sweaterPrice;
    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${toysSumTotal}`);
    console.log(`Money for sweaters: ${sweaterSumTotal}`);
}
christmasGifts(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"]);