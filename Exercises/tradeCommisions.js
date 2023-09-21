function tradeCommissions (input){
    let city = input[0];
    let salesVolume = Number(input[1]);
    let commission = 0;
    if (salesVolume >= 0 && salesVolume <=500){
        if(city == "Sofia"){
            commission = 0.05;
            console.log((salesVolume * commission).toFixed(2));
        }else if(city == "Varna"){
            commission = 0.045;
            console.log((salesVolume * commission).toFixed(2));
        }else if(city == "Plovdiv"){
            commission = 0.055;
            console.log((salesVolume * commission).toFixed(2));
        }else{
            console.log("error");
        }
    } else if (salesVolume >= 500 && salesVolume <= 1000){
        if (city == "Sofia"){
            commission = 0.07;
            console.log((salesVolume * commission).toFixed(2));
        } else if (city == "Varna"){
            commission = 0.075;
            console.log((salesVolume * commission).toFixed(2));
        } else if (city == "Plovdiv"){
            commission = 0.080;
            console.log((salesVolume * commission).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (salesVolume >= 1000 && salesVolume <= 10000){
        if (city == "Sofia"){
            commission = 0.08;
            console.log((salesVolume * commission).toFixed(2));
        }else if(city == "Varna"){
            commission = 0.10;
            console.log((salesVolume * commission).toFixed(2));
        }else if(city == "Plovdiv"){
            commission = 0.12;
            console.log((salesVolume * commission).toFixed(2));
        }else{
            console.log("error");
        }
    } else if (salesVolume >= 10000){
        if (city == "Sofia"){
            commission = 0.12;
            console.log((salesVolume * commission).toFixed(2));
        }else if(city == "Varna"){
            commission = 0.13;
            console.log((salesVolume * commission).toFixed(2));
        }else if(city == "Plovdiv"){
            commission = 0.145;
            console.log((salesVolume * commission).toFixed(2));
        }else{
            console.log("error");
        }
    } else{
        console.log("error")
    }
}
tradeCommissions(["Kaspichan", "-50"]);