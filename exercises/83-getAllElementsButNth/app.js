// Write your function here
function getAllElementsButNth(array, num){
    array.splice(num, 1);
    return array;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']