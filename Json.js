const Obj={
    name:"Asw",
    arr:['A','B','C'],
    hello:function(){
        console.log('hello !!')
    }
}

console.log(Obj)

const sendJSON=JSON.stringify(Obj)
console.log(sendJSON) //{"name":"Asw","arr":["A","B","C"]}
console.log(typeof sendJSON); //string
//the sendJson will be a string made of the object but will not consider the function as functions are not sent to the server while getting stringified 

const recieveJSON=JSON.parse(sendJSON)
console.log(recieveJSON); //{name: 'Asw', arr: Array(3)}
//will not get function in return as it was not sendt to the server
console.log(typeof recieveJSON); // object