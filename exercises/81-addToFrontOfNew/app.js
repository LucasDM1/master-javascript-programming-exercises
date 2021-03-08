// Write your function here
function addToFrontOfNew(enter, num){
    enter.unshift(num);
    return enter
};



var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // [3, 1, 2];
console.log(input); //--> [1, 2]