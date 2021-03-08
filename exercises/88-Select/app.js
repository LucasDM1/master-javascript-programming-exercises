// Write your function here
function select (array, object){
    
    return result = Object.assign(...array.map(k => k in obj ? { [k]: obj[k] } : {}));

};




var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }