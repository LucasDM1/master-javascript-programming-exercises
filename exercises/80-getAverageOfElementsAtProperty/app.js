// Write your function here
function getAverageOfElementsAtProperty(objt, key){
    let Array1=obj.key;
    let newArray=[];
    let sum=0;
    
    if (Array1=='') {
        return 0;
    }else if(typeof(obj.key)!="object"){
        return 0;
    }else if (key=='') {
        return 0;
    }else{
        for (let i = 0; i < Array1.length; i++) {
          newArray.push(parseInt(Array1[i]));
          sum=sum+newArray[i];
        }
      
        return sum/Array1.length;
    }
    
    
}


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2