function circleAreaPerimeter(input){
    let r = Number(input[0]);
    areaCircle = (Math.PI * Math.pow(r,2)).toFixed(2);
    perimeterCircle = (2 * Math.PI * r).toFixed(2);
    console.log(areaCircle);
    console.log(perimeterCircle);
}
circleAreaPerimeter([4.5]);