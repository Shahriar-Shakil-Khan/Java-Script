console.log('external file')

function blue(){
    document.body.style.backgroundColor ='blue';
}
function yellow(){
    document.body.style.backgroundColor='yellow'
}

const btnMakeRed=document.getElementById('btn-make-red');
btnMakeRed.onclick=function makeRed(){
    document.body.style.backgroundColor='red';
}