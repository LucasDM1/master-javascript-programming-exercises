// Write your function here
function getElementsThatEqual10AtProperty(objeto, key){
    let newArray=[];
    let empty=[];
    if(objeto.key==""){
      
        return empty;
    }else if(typeof(objeto.key)!="object"){
        return empty;
    }else{
        objeto.key.forEach(element => {
        if (element==10) {
            newArray.push(element);
        }else{
            return empty;
        }
        });
    }
    
    return newArray;
}
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]