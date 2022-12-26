//Documentation:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const string="Mathematics";

// length property
console.log(string.length)

//charAt
console.log(string.charAt(5)) //starts with 0 ends with length-1

console.log("   ")
console.log("indexOf method")
//indexOf
console.log(string.indexOf('Mat')) //gives 0
console.log(string.indexOf('mat')) // gives 5
console.log(string.indexOf('at')) //gives index of first occurance (1)
console.log(string.indexOf('ati')) //gives 6
console.log(string.indexOf('o')) //gives -1 as not present in string

console.log("   ")

//lastIndexOf
console.log(string.lastIndexOf('at'))  //gives index of last occurence
console.log(string.lastIndexOf('ath')) //gives 1
console.log(string.lastIndexOf('o')) //gives -1

console.log("   ")
console.log("split method")

console.log(string.split("")) //makes an array of every letter 
//['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']

console.log(string.split('e')) //['Math', 'matics'] (excludes e)
console.log("Hello my self Aswinee".split(' ')) //['Hello', 'my', 'self', 'Aswinee']

console.log("   ")
console.log("slice method")

console.log(string.slice(0,4));  //returns letter from start num(0) to 1-last num given in argument(4) 
console.log(string.slice(5)) //returns matics 
console.log(string.slice(5,6)) //returns 1 word 'm'
console.log(string.slice(5,2)) //returns nothing
console.log(string.slice(-1)) //returns last charecter of string


console.log("   ")
console.log("includes method")
console.log(string.includes('atics')) //returns true
console.log(string.includes('bio'))//returns false

console.log("   ")
console.log("toUpperCase method")
console.log(string.toUpperCase())

console.log("   ")
console.log("toLowerCase method")
console.log(string.toLowerCase())

console.log("   ")
console.log("charCodeAt method")

console.log(`char code of ${string.charAt(0)} is ${string.charCodeAt(0)}`)  //returns the utf code of M

console.log("   ")
console.log("charCodeAt method")
console.log(string.concat(' is good')) //return //Mathematics is good

console.log("   ")
console.log("endsWith method")
console.log(string.endsWith('tics')) //returns true
console.log(string.endsWith('tics',11)) //11 is the index of s returns true

console.log("   ")
console.log("repeat method")
console.log(string.repeat(3)) //returns MathematicsMathematicsMathematics

console.log("   ")
console.log("replace method")

const str= 'Hi my name is Aswinee and people call me Aswinee';
console.log(str.replace('Aswinee','Srk')) //Aswinee replaced with Srk only in first occurance
//Hi my name is Srk and people call me Aswinee

console.log(str.replaceAll('Aswinee','Srk')) //Aswinee replaced with Srk in all occurences
// Hi my name is Srk and people call me Srk

console.log("   ")
console.log("trim method")
const str2='           Hello           guys        '
console.log(str2)
console.log(str2.trim())  //trims the extra space before Hello and after guys

//similarly trimStarts trims only before Hello and trimsEnds trims after guys



