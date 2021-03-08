// Write your function here
function getElementsLessThan100AtProperty(objeto, key){
    let newArray=[];
    let empty=[];
    if(objeto.key==""){
      
        return empty;
    }else if(typeof(objeto.key)!="object"){
        return empty;
    }else{
        objeto.key.forEach(element => {
        if (element<100) {
            newArray.push(element);
        }else{
            return empty;
        }
        });
    }
    
    return newArray;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]