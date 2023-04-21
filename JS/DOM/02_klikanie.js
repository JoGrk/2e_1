const textArray = document.getElementsByName('text')
console.log(textArray)
console.log(textArray[0])
// textArray[0].innerHTML = "kliknięty"
// textArray[20].style.color = 'red'

function wylosuj (max){
    const min=0
    return Math.floor(Math.random()*(max-min+1)+min)
}
const max = textArray.length
textArray[wylosuj(max)].style.color = 'red'

