function trekkingMania(input){
    let groups = Number(input[0]);
    let musalla = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    for(let i = 1; i <= groups; i++){
        let currentGroup = Number(input[i]);
        if(currentGroup <= 5){
            musalla+= currentGroup;
        }else if(currentGroup <= 12){
            monblan+= currentGroup;
        }else if(currentGroup <= 25){
            kilimanjaro+= currentGroup;
        }else if(currentGroup <= 40){
            k2+= currentGroup;
        }else {
            everest+= currentGroup;
        }
    }
    let total = musalla + monblan + kilimanjaro + k2 + everest;
    console.log(`${(musalla / total * 100).toFixed(2)}%`);
    console.log(`${(monblan / total * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / total * 100).toFixed(2)}%`);
    console.log(`${(k2 / total * 100).toFixed(2)}%`);
    console.log(`${(everest / total * 100).toFixed(2)}%`);
}
trekkingMania([5, 25 , 41 ,31, 250, 6]);