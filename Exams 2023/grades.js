function grades(input){
    let studentCount = Number(input[0]);
    let average = 0;
    let failGradeCount = 0;
    let failGradeSum = 0;
    let passGrade3Count = 0;
    let passGrade3Sum = 0;
    let passGrade4Count = 0;
    let passGrade4Sum = 0;
    let passGrade5Count = 0;
    let passGrade5Sum = 0;
    for ( let i = 1; i <= studentCount; i++){
        if( input[i] >= 2.00 && input[i] <= 2.99){
            failGradeCount++;
            failGradeSum += Number(input[i]);
        }else if (input[i] >= 3.00 && input[i] <= 3.99){
            passGrade3Count++;
            passGrade3Sum += Number(input[i])
        }else if (input[i] >= 4.00 && input[i] <= 4.99){
            passGrade4Count++
            passGrade4Sum += Number(input[i]);
        }else if (input[i] >= 5.00){
            passGrade5Count++;
            passGrade5Sum += Number(input[i]);
        }
    }
    average = (failGradeSum + passGrade3Sum + passGrade4Sum + passGrade5Sum ) / studentCount;
    console.log(`Top students: ${(passGrade5Count / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(passGrade4Count / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(passGrade3Count/ studentCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failGradeCount / studentCount * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);