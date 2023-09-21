function maxNumber(input){
    let index = 0;
    let myMaxNumber = Number.MIN_SAFE_INTEGER;
    let command = input[index];
    index++;
    while (command !== "Stop"){
        let num = Number(command);
        if (myMaxNumber < num){
            myMaxNumber = num;
        }
        command = input[index];
        index++;
    }
    console.log(myMaxNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"]);