function grampaStavri(input){
    let days = Number(input[0]);
    let totalLitres = 0;
    let rakiaDegree = 0;
    let rakiaDegreeSum = 0;
    let average = 0;
    for (let i = 1; i <= days * 2; i += 2){
        rakiaDegree = Number(input[i + 1]);
        totalLitres += Number(input[i]);
        rakiaDegreeSum += Number(input[i]) * rakiaDegree;
        average = rakiaDegreeSum / totalLitres;
    }
    console.log(`Liter: ${totalLitres.toFixed(2)}`);
    console.log(`Degrees: ${average.toFixed(2)}`);
    if ( average < 38){
        console.log("Not good, you should baking!");
    }else if ( average >= 38 && average <= 42){
        console.log("Super!");
    }else if( average > 42){
        console.log("Dilution with distilled water!");
    }
}
grampaStavri([3, 100, 45, 50, 55, 150, 36]);