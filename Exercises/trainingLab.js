function trainingLab(input){
    let height = Number(input[0]);
    let width = Number(input[1]);
    let totalWidth = width * 100;
    let totalHeight = height * 100;
    let widthMinusCorridor = totalWidth - 100;
    //let heightMinusCorridor = totalHeight - 100;
    let deskWidthSize = 70;
    let deskHeightSize = 120;
    let desksInRowWidth = Math.floor(widthMinusCorridor / deskWidthSize);
    let deskInRowHeight = Math.floor(totalHeight / deskHeightSize);
    let totalDesks = desksInRowWidth * deskInRowHeight - 3;
    console.log(totalDesks);
}
trainingLab([8.4, 5.2]);