// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf
const number=42;
const floatNum=42.0000000000;
const floatNum2=42.0000000001;
const str="42";


console.log(number)
console.log(floatNum) //retuns 42 (removing all zeros)
console.log(floatNum2) //returns 42.0000000001
console.log(typeof(floatNum)) //returns number
console.log(number===floatNum); //returns true
console.log(number===str); //returns false because data types are different
console.log(number==str); //returns true because == doesnit compare datatype

console.log(str+3);//returns 423

console.log('convertind string to number');
console.log(Number(str)+3) //returns 45
console.log(Number(str)===floatNum); //returns true
console.log(Number(str)===number); //returns true
console.log(Number("str"));//returns NaN
console.log(Number(true));//return 1

console.log(" ")
//checks if number is integer or not
console.log(Number.isInteger(floatNum)); //returns true
console.log(Number.isInteger(floatNum2)); //returns false

console.log(" ")
console.log('PareFloat');
console.log(Number.parseFloat('42.897abs06')) //returns 42.897

console.log(" ")
console.log('PareInt');
console.log(Number.parseInt('42.897abs06')) //returns 42

console.log(" ")
console.log('toFixed');
console.log(Number.parseFloat('42.897abs06').toFixed(1)) //returns 42.9(string) (rouds off)
console.log(typeof(Number.parseFloat('42.897abs06').toFixed(1))) //returns string

console.log(" ")
console.log('toString');
console.log(floatNum2.toString());
console.log(typeof(floatNum2.toString())); //returns string
