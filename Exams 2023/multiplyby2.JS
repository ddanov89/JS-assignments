function multiplyByTwo(input){
    let index = 0;
    let n = Number(input[index]);
    while(n >= 0){
        let result = n * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        index++;
        n = Number(input[index]);
        if ( n < 0){
            console.log('Negative number!');
            break;
        }
    }
}
multiplyByTwo([12, 43.2144, 12.3, 543.23, -20]);