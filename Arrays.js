const myArray=[];

//adding element
myArray[0]='ASW';
myArray[1]=10;
myArray[2]=true;
myArray[3]=10;

console.log(myArray)  //['ASW', 10, true, 10]


//length of array
console.log(myArray.length)//4

//lastindexof  of a particular element
console.log(myArray.lastIndexOf(10)) //3

//adding element to last of array
myArray.push('99')
console.log(myArray) //['ASW', 10, true, 10, '99']

//remocing last element of array
myArray.pop()
console.log(myArray)//['ASW', 10, true, 10]

//adding element to start of array
myArray.unshift('000')
console.log(myArray) //['000', 'ASW', 10, true, 10]

//removing element from start of array
myArray.shift()
console.log(myArray) //['ASW', 10, true, 10]

//removing element from middle of array
myArray.splice(1,1)
console.log(myArray) // ['ASW', true, 10]

//replace element in middle of array
myArray.splice(1,1,10)
console.log(myArray) // ['ASW', 10, 10]

//adding element
myArray.splice(2,0,true)
console.log(myArray) //['ASW', 10, true, 10]



const arr=['A','B','C','D','E','F'];

//slice method
console.log (arr.splice(0,2)); //['A', 'B']
console.log(arr) //['C', 'D', 'E', 'F']

//reverse method
arr.reverse();
console.log(arr);

//reverse method
const newstr=arr.join();
console.log(newstr); //A,B,C,D,E,F

const arrA=['A','B','C'];
const arrB=['D','E','F'];

//concat method
const newArr=arrA.concat(arrB)
console.log(newArr) //['A', 'B', 'C', 'D', 'E', 'F']

// concate using spread operator
const newArr2=[...arrA,...arrB]
console.log(newArr2) //['A', 'B', 'C', 'D', 'E', 'F']

