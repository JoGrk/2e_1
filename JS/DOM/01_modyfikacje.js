let cmElement=document.getElementById('cm');
// console.log(cmElement);

function changeText(){
    cmElement.innerHTML='Jestem HTML'
}


cmElement.addEventListener('click',changeText)

let btnElement=document.getElementById('btn')
console.log(btnElement)

function changeColor(){
    document.body.style.backgroundColor = `lightblue` 
}
btnElement.addEventListener('click',changeColor)