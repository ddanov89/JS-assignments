function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    let isCFound = false;
    let isOFound = false;
    let isNFound = false;
    let tempWord = "";
    let finalWord = "";
    while (command !== "End") {
        if (command.toLowerCase() !== command.toUpperCase()) {
            if (command === "c") { // isCFound == true;
                if (isCFound) {
                    tempWord += command;
                } else {
                    isCFound = true;
                }
            } else if (command === "n") {
                if (isNFound) {
                    tempWord += command;
                } else {
                    isNFound = true;
                }

            } else if (command === "o") {
                if (isOFound) {
                    tempWord += command;
                } else {
                    isOFound = true;
                }
            } else {
                tempWord += command;
            }
            if (isCFound && isNFound && isOFound) {
                finalWord += tempWord + " ";
                isCFound = false;
                isNFound = false;
                isOFound = false;
                tempWord = "";
            }
        }
        index++;
        command = input[index];
    }
    console.log(finalWord);
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);