function pipesInAPool (input){
    let v = Number(input[0]);
    let litrePerHourPipe1 = Number(input[1]);
    let litrePerHourPipe2 = Number(input[2]);
    let hours = Number(input[3]);
    volumeP1 = hours * litrePerHourPipe1;
    volumeP2 = hours * litrePerHourPipe2;
    totalVolume = volumeP1 + volumeP2;
    filledVolume = totalVolume / v * 100;
    p1Assisted = (volumeP1 / totalVolume * 100).toFixed(2);
    p2Assisted = (volumeP2 / totalVolume * 100).toFixed(2);
    if (v >= totalVolume){
        console.log(`The pool is ${filledVolume}% full. Pipe 1: ${p1Assisted}%. Pipe 2: ${p2Assisted}%.`);
    }else if (v < totalVolume){
        console.log(`For ${hours} hours the pool overflows with ${totalVolume - v} liters.`);
    }
}
pipesInAPool([100, 100, 100, 2.5]);