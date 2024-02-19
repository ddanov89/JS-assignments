function repaint(input) {
    let plastic = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let neededHours = Number(input[3]);
    let plasticSum = (plastic + 2) * 1.50;
    let paintSum = (paint + 10 / 100 * paint) * 14.50;
    let thinnerSum = thinner * 5.00;
    let bag = 0.40;
    let totalSumMaterials = plasticSum + paintSum + thinnerSum + bag;
    let workerSum = (totalSumMaterials * 30 / 100) * neededHours;
    let totalSum = totalSumMaterials + workerSum;
    console.log(totalSum);
    }
    repaint([10, 11, 4, 8]);