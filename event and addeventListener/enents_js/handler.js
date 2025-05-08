// console.log('Event Handler');

document.getElementById('button-title-update').addEventListener('click',function(){
    // console.log('btn-clicked')
    const pageTitle=document.getElementById('page-title');
    pageTitle.innerText='Hello!Nabil';
})

document.getElementById("button-update").addEventListener('click',function(){
// console.log('clicked')
const inputName=document.getElementById('input-name');
//console.log(inputName);
const name=inputName.value;
console.log(name);

const headingAiub=document.getElementById('heading-aiub');
headingAiub.innerText=name;

})