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

let numberElement=document.getElementById('number')
let btn2Element=document.getElementById('btn2')
console.log(numberElement,btn2Element)

function numberGen(){
    const min=0
    const max=100
    const result=Math.floor(Math.random()*(max-min+1)+min)
    console.log(result)
    numberElement.innerHTML=result
}

btn2Element.addEventListener('click',numberGen)

