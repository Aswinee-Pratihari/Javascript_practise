function sum(){
    return 2+2;
}

console.log(sum())

//func with parameter
function sum2(a,b){
    return a+b;
}
console.log(sum2(3,6))


//function with single parameter when 2 parameters are needed
function sum3(a,b){
if(b===undefined){
  
    return 2*a;
}
    return a+b;
}
console.log(sum3(3))

function getUserNameFromEmail(email){
    return email.slice(0,email.indexOf('@'));
}

console.log(getUserNameFromEmail('akpratihari@gmail.com'))


//anonymous function
const getUserNameFromEmail1=function(email){
    return email.slice(0,email.indexOf('@'));
}

console.log(getUserNameFromEmail1('akpratihari@gmail.com'))

//arrow function
const getUserNameFromEmail2=(email)=>{
    return email.slice(0,email.indexOf('@'));
}
console.log(getUserNameFromEmail2('user@github.com'))