function numberRange(input) {
    let num = Number(input[0]);
    if (num >= -100){
        if (num <= 100){
            if(num != 0){
                console.log("Yes");
            }else {
                console.log("No");
            }
        }else{
            console.log("No");
        }
    }else{
        console.log("No");
    }
}
numberRange([25]);