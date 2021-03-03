// Write your function here
function getAverageOfElementsAtProperty(objt, key){
   if (typeof objt[key] == Array) {
       for(let i=0; i<objt[key].length; i++ ){
           return "hola"
       }
       
   }
}


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2