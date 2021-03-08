// Write your function here
function areValidCredentials(user,password){
    if(user.length>3&&password.length>=8){
        return true;
    };
}


var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero