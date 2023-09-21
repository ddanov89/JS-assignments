function powerfulWord(input) {
    let index = 0;
    let command = input[index];
    index++
    let vowels = "aeiouAEIOU";
    let topWord = "";
    let mostPoints = 0;
 
    while (command !== "End of words") {
        let word = command;
        let currentPoints = 0;
 
        for(i = 0; i < word.length; i++){
            let letter = word[i];
            let ascii = letter.charCodeAt(0);
            currentPoints += ascii;
 
 
        }
        let result = 0
        if(vowels.includes(word[0])){
           currentPoints *= word.length;
        }
        else{
           currentPoints /= word.length;
        }
        if(mostPoints < currentPoints){
            mostPoints = Math.floor(currentPoints);
            topWord = word;
        }
        command = input[index];
        index++
    }
    console.log(`The most powerful word is ${topWord} - ${mostPoints}`);
}
powerfulWord([]);