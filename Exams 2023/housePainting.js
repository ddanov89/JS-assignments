function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    sideWall = x * y; // 158.36
    windowSize = 1.5 * 1.5; //2.25
    wallSum = 2 * sideWall - 2 * windowSize;//312.224
    backWall = x * x; //36
    entrance = 1.2 * 2;// 2.4
    allWalls = 2 * backWall - entrance; // 69.6
    total = wallSum + allWalls; //381.824
    greenPaint = (total / 3.4).toFixed(2); // 112.3

    roof = 2 * x * y;
    roofTriangle = 2 * (x * h / 2);
    allRoof = roof + roofTriangle;
    redPaint = (allRoof / 4.3).toFixed(2);
    console.log(greenPaint);
    console.log(redPaint);
}
housePainting([10.25, 15.45, 8.88]);