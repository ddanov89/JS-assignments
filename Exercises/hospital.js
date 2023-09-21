function hospital (input){
    let days = Number(input[0]);
    let doctorNumber = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let patients = 0;
    //let tempUntreated = 0;
    //let tempTreated = 0;
    for( let i = 1; i <= days; i++){
        patients = Number(input[i]);
        if( i % 3 === 0){
            if(untreatedPatients > treatedPatients){
                doctorNumber++;
                //tempUntreated = 0;
                //tempTreated = 0;
            }
        }
        if (patients > doctorNumber){
            treatedPatients += doctorNumber;
            untreatedPatients += patients - doctorNumber;
            //tempUntreated += patients - doctorNumber;
            //tempTreated += doctorNumber;
        }else if(patients <= doctorNumber){
            treatedPatients += patients;
            //tempTreated += patients;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([4, 7, 27, 9, 1]);