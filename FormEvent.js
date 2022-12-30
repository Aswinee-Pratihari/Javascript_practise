let view=document.querySelector('#view3')

const myform=view.querySelector('#myForm')
myform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('done')
})