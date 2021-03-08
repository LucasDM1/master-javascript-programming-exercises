// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3) {
    let minlength = 100;
    if (minlength > word1.length) {
        minlength = word1.length;
        if (word1.length > word2.length) {
            minlength = word2.length;
            if (word2.length > word3.length) {
                minlength = word3.length
            }
        }
    } 
    return minlength
}



var output = findMinLengthOfThreeWords('aaaa', 'be', 'see');
console.log(output); // --> 1