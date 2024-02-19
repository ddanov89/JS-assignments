function basketBallEquipment(input) {
let tax = Number(input[0]);
let shoes = tax * 0.60;
let clothes = shoes * 0.80;
let ball = clothes * 0.25;
let basketBallAccessories = ball * 0.20;
let total = tax + shoes + clothes + ball +basketBallAccessories;
console.log(total);
}
basketBallEquipment([365]);