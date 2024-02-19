function weatherForecast (input){
    let dayState = input[0];
    if (dayState === "sunny"){
        console.log("It's warm outside!");
    }else {
        console.log("It's cold outside!");
    }
}
weatherForecast(["sunny"]);