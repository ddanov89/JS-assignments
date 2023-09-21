function fishTank(input) {
let length = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percentage = Number(input[3]);
let volume = length * width * height;
let volumeLiters = volume / 1000;
let requiredLiters = volumeLiters * (1 - percentage /100);
console.log(requiredLiters.toFixed(2));
}
fishTank([105, 77, 89, 18.5]);