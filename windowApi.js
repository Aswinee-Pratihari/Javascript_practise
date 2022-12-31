// window.alert('ok')
// // or  
// alert(location) //location gives ur of website

const myObj={
    name:"ads",
    logname:function(name){
        console.log(name)
    },
    arr:['eat','sleep']
}

//sessionStorage //keeps data only when we are on the website
sessionStorage.setItem('mystore',myObj)
const data=sessionStorage.getItem('mystore')

// console.log(data) //this will give me string not an obj and we can't apply json.parse on it 

//so better write in this way
// sessionStorage.setItem('mystore2',JSON.stringify(myObj))
// const data2=sessionStorage.getItem('mystore2');
// console.log(JSON.parse(data2)) //o/p {name: 'ads'}

sessionStorage.setItem('mystore2',JSON.stringify(myObj.arr))
const data2=sessionStorage.getItem('mystore2');

console.log(JSON.parse(data2)) //o/p {name: 'ads'}

//methods
// sessionStorage.removeItem(data2) //removes a particular data
// sessionStorage.clear() //clrs all data
// const key=sessionStorage.key(0) //get name of a particular key based on index
// console.log(key);

// console.log(sessionStorage.length) //length of storage