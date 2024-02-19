function movieRating(input){
    let movieCount = Number(input[0]);
    let maxRatingMovieName = 0;
    let maxRatingScore = 0;
    let minRatingMovieName = 0;
    let minRatingScore = 10;
    let scoreSum = 0;
    for (let i = 1; i <= movieCount * 2; i+=2){
        if (maxRatingScore < Number(input[i+1])){
            maxRatingMovieName = input[i];
            maxRatingScore = Number(input[i+1]);
        }
        if (minRatingScore > Number(input[i+1])){
            minRatingMovieName = input[i];
            minRatingScore = Number(input[i+1]);
        }
        scoreSum += Number(input[i+1]);
    }
    console.log(`${maxRatingMovieName} is with highest rating: ${maxRatingScore.toFixed(1)}`);
    console.log(`${minRatingMovieName} is with lowest rating: ${minRatingScore.toFixed(1)}`);
    console.log(`Average rating: ${(scoreSum /movieCount).toFixed(1)}`);
}
movieRating([5, "A Star is Born", 7.8, "Creed 2", 7.3, "Mary Poppins", 7.2, "Vice", 7.2, "Captain Marvel", 7.1]);