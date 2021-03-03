// Write your function here
function isOddLength(palabra){
    if(palabra.length%2!=0){
        return true;
    }else{
        return false;
    }
}

var output = isOddLength('special');
console.log(output); // --> true