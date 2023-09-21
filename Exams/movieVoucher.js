function movieVoucher(input){
    let voucher = Number(input[0]);
    let index = 1;
    let purchase = "";
    let purchasePrice = 0;
    let ticketCount = 0;
    let othersCount = 0;
    while (input[index] !== "End") {
       purchase = input[index];
       if (purchase.length > 8){
        purchasePrice = purchase.charCodeAt(0) + purchase.charCodeAt(1);
        if(purchasePrice <= voucher){
            voucher -= purchasePrice;
           }else {
            break;
           }
        ticketCount++;
       } else if ( purchase.length <= 8){
        purchasePrice = purchase.charCodeAt(0);
        if(purchasePrice <= voucher){
            voucher -= purchasePrice;
           }else {
            break;
           }
        othersCount++;
       }
       index++;
    }
    console.log(`${ticketCount}`);
    console.log(`${othersCount}`);
}
movieVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"]);