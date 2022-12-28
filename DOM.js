const view1=document.getElementById('view1')
console.log(view1)

const view2=document.querySelector('#view2')
console.log(view2)

view1.style.display='flex'
view2.style.display='flex'

const views=document.getElementsByClassName('view')
console.log(views)

const sameViews=document.querySelectorAll('.view')
console.log(sameViews)

const divs=view1.querySelectorAll('div')
console.log(divs);

const samedivs=view1.getElementsByTagName('div')
console.log(samedivs);

const evenDivs=view1.querySelectorAll('div:nth-of-type(2n)');
console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor='red'
    
}

const navText=document.querySelector('nav h1');
console.log(navText)
navText.textContent='hello'

const navbar=document.querySelector('nav')
navbar.style.backgroundColor='green'
navbar.innerHTML='<h1>Hello Sir</h1> <p> This is to align right</p>'
navbar.style.justifyContent='space-evenly'

//DOM TRAVELLING
console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)//12 divs
console.log(evenDivs[0].parentElement.childNodes) //25 divs , text 
console.log(evenDivs[0].parentElement.firstChild) //#text
console.log(evenDivs[0].parentElement.firstElementChild)
console.log(evenDivs[0].nextSibling) //gives a node
console.log(evenDivs[0].nextElementSibling) //gives a html
console.log(evenDivs[0].previousSibling) //gives a node
console.log(evenDivs[0].previousElementSibling) //gives a html

//adding and removing
view1.style.display='none'
view2.style.display='flex'
view2.style.flexDirection='row'
view2.style.flexWrap='wrap'
view2.style.margin='10px'

while(view2.lastChild){
    view2.lastChild.remove()
}

const createDivs=(parent,iter)=>{
    const newDiv=document.createElement('div')
    newDiv.textContent=iter
    newDiv.style.backgroundColor='#000'
    newDiv.style.color='#fff'
    newDiv.style.width='100px'
    newDiv.style.height='100px'
    newDiv.style.margin='10px'
    newDiv.style.justifyContent='center'
    newDiv.style.alignItems='center'
    parent.append(newDiv)
}

let i=0;
while(i<12){
    createDivs(view2,i)
    i++;
}

