const view=document.querySelector('#view2')

const div=view.querySelector('div')
const h2=div.querySelector('h2')
console.log(h2)

//AddeventListener(event,function,useCapture)

// const doSomthing=function(){
// alert('doing !!!')
// }

// h2.addEventListener('click',doSomthing,false)
// h2.removeEventListener('click',doSomthing,false)

// //adding anonymous func
// h2.addEventListener('click',(e)=>{
//     alert('do something!!')
//     console.log(e.target)
//     e.target.textContent='clicked'
// },false)

// document.addEventListener('readystatechange',(e)=>{
//     if (e.target.readyState==='complete') {
//         console.log('ready state complete')
//         initApp()
//     } else {
//         console.log('ready state incomplete')
//     } //tells if page is loaded or not
// })

// function initApp() { //event bubbling (`clicking on inside elemnet (h2) will bubble out and all events will be listened )
//     view.addEventListener('click',(e)=>{
//         view.style.backgroundColor='pink';
//     })

//     div.addEventListener('click',(e)=>{
//         event.stopPropagation()  //stops bubbling from inside and 
//         div.style.backgroundColor='red';
//     })

//     h2.addEventListener('click',(e)=>{
//         e.target.textContent='clicked'
//     })
// }

//adding and removing classes after clicks
view.addEventListener('click',(e)=>{
// view.classList.add('purple')
// view.classList.remove('darkblue') //changes only one

view.classList.toggle('purple')
view.classList.toggle('darkblue') //changes again and again whenever clicked
})

h2.addEventListener('click',(e)=>{
    let text= e.target.textContent
       
       text==='My 2nd View'?(e.target.textContent='clicked'):(e.target.textContent='My 2nd View')
    },false)

const nav=document.querySelector('nav')

nav.addEventListener('mouseover',(e)=>{
    e.target.classList.add('height100')
    // text==='My Page'?(text='My Page'):(text='NAVBAR')
})

nav.addEventListener('mouseout',(e)=>{
    e.target.classList.remove('height100')
    // text==='My Page'?(text='My Page'):(text='NAVBAR')
})