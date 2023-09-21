function trapeziodArea(input){
let b1 = Number(input[0]);
let b2 = Number(input[1]);
let height = Number(input[2]);
let area = (b1 + b2) * height /2;
console.log(area.toFixed(2));
}
trapeziodArea([8 , 13, 7]);