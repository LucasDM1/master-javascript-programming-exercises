// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3) {
    let maxlength = 0;
    if (maxlength < word1.length) {
        maxlength = word1.length;
        if (word1.length < word2.length) {
            maxlength = word2.length;
            
        }else if (word2.length < word3.length) {
                maxlength = word3.length
        }
    } 
    return maxlength
}
var output = findMaxLengthOfThreeWords('asdfgk', 'beop', 'see');
console.log(output); // --> 3