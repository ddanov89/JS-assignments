function travelAgency(input){
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;
    let bool = true;
    if (days > 7){
        days--;
    }
    switch (city){
        case "Bansko":
        case "Borovets":
            switch (package){
                case "noEquipment":
                    if ( days > 1){
                        console.log("Days must be positive number!");
                    } else{
                        if ( vip === "yes"){
                            price = days * 80 * 0.95;
                        }else {
                            price = days * 80;
                        }
                    }
                    break;
                    case "withEquipment": 
                    if(days < 1){
                        console.log("Days must be positive number!");
                    }else {
                        if (vip === "yes"){
                            price = days * 100 * 0.90;
                        }else {
                            price = days * 100;
                        }
                    }
                    break;
                    default: console.log("Invalid input!");
                    bool = false;
                    break;
            }
            break;
            case "Varna":
            case "Burgas":
                switch(package){
                    case "noBreakfast":
                        if (days < 1){
                            console.log("Days must be positive number!");
                        }else {
                            if (vip === "yes"){
                                price = days * 100 * 0.90;
                            }else {
                                price = days * 100;
                            }
                        }
                        break;
                        case "withBreakfast":
                            if (days < 1){
                                console.log("Days must be positive number!");  
                            }else {
                                if (vip === "yes"){
                                    price = days * 130 * 0.88;
                                }else {
                                    price = days * 130;
                                }
                            }
                            break;
                            default: console.log("Invalid input!");
                            bool = false;
                            break;
                }
                break;
                default: console.log("Invalid input!");
                bool = false;
                break;
    }
    if (days > 1 && bool){
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency([]);