function footballSouvenirs(input) {
    let team = input[0];
    let souvenirType = input[1];
    let purchasedCount = Number(input[2]);
    let pricePerPurchase = 0;
    let totalCost = 0;
    if ( team === "Argentina"){
        if ( souvenirType === "flags"){
            pricePerPurchase = 3.25;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "caps"){
            pricePerPurchase = 7.20;
            totalCost = purchasedCount * pricePerPurchase;
        }else if ( souvenirType === "posters"){
            pricePerPurchase = 5.10;
            totalCost = purchasedCount * pricePerPurchase;
        }else if( souvenirType === "stickers"){
            pricePerPurchase = 1.25;
            totalCost = purchasedCount * pricePerPurchase;
        }
    }else if ( team === "Brazil"){
        if (souvenirType === "flags"){
            pricePerPurchase = 4.20;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "caps"){
            pricePerPurchase = 8.50;
            totalCost = purchasedCount * pricePerPurchase;
        }else if ( souvenirType === "posters"){
            pricePerPurchase = 5.35;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "stickers"){
            pricePerPurchase = 1.20;
            totalCost = purchasedCount * pricePerPurchase;
        }
    }else if( team === "Croatia"){
        if (souvenirType === "flags"){
            pricePerPurchase = 2.75;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "caps"){
            pricePerPurchase = 6.90;
            totalCost = purchasedCount * pricePerPurchase;
        }else if ( souvenirType === "posters"){
            pricePerPurchase = 4.95;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "stickers"){
            pricePerPurchase = 1.10;
            totalCost = purchasedCount * pricePerPurchase;
        }
    }else if(team === "Denmark"){
        if (souvenirType === "flags"){
            pricePerPurchase = 3.10;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "caps"){
            pricePerPurchase = 6.50;
            totalCost = purchasedCount * pricePerPurchase;
        }else if ( souvenirType === "posters"){
            pricePerPurchase = 4.80;
            totalCost = purchasedCount * pricePerPurchase;
        }else if (souvenirType === "stickers"){
            pricePerPurchase = 0.90;
            totalCost = purchasedCount * pricePerPurchase;
        }
    }
    if ((team === "Argentina" || team === "Brazil" || team === "Croatia" || team === "Denmark") && (souvenirType === "flags" || souvenirType === "caps" || souvenirType === "posters" || souvenirType ==="stickers")){
        console.log(`Pepi bought ${purchasedCount} ${souvenirType} of ${team} for ${totalCost.toFixed(2)} lv.`);
    }else if (souvenirType !== "flags" && souvenirType !== "caps" && souvenirType !== "posters" && souvenirType !== "stickers"){
        console.log("Invalid stock!");
    }else if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark"){
        console.log("Invalid country!");
    }
}
footballSouvenirs(["USA",
"caps",
"18"])
