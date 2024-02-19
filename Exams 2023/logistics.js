function logistics (input){
    let loads = Number(input[0]);
    let busCargoTons = 0;
    let truckCargoTons = 0;
    let trainCargoTons = 0;
    let totalCargoSum = 0;
    let totalCargoTons = 0;
    let average = 0;
    for( let i = 1; i <= loads; i++){
        if (input[i] <= 3){
            busCargoTons += Number(input[i]);
            totalCargoSum += Number(input[i]) * 200;
        }else if ( input[i] >= 4 && input[i] <= 11){
            truckCargoTons += Number(input[i]);
            totalCargoSum += Number(input[i]) * 175;
        }else if (input[i] >= 12 ){
            trainCargoTons += Number(input[i]);
            totalCargoSum += Number(input[i]) * 120;
        }
        
    }
    totalCargoTons = busCargoTons + truckCargoTons + trainCargoTons;
    average = totalCargoSum / totalCargoTons;
    console.log(average.toFixed(2));
    console.log(`${(busCargoTons / totalCargoTons * 100).toFixed(2)}%`);
    console.log(`${(truckCargoTons / totalCargoTons * 100).toFixed(2)}%`);
    console.log(`${(trainCargoTons / totalCargoTons * 100).toFixed(2)}%`);
}
logistics([4, 1, 5, 16, 3]);