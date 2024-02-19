function numbersFrom100To200(input){
let finalNumber = Number(input[0]);
if (finalNumber < 100){
    console.log("Less than 100");
} else if (finalNumber > 200){
    console.log("Greater than 200");
}else {
    console.log("Between 100 and 200");
}
}
numbersFrom100To200([201]);