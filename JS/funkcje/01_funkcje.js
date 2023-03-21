
'use strict'
// 1. utwórz funkcję multipy, która zwraca iloczyn swoich dwóch całkowitych argumentów. Wywołaj funkcję dla obliczenia iloczynu dowolnych dwóch liczb. 

function multiply(a,b){
    return a*b;
}

console.log("zadanie 1")
console.log(multiply(10,23)) // 230
console.log(multiply(1.2, 30)) // 36

// 2. zapisz funkcję areaT, która będzie miała dwa parametry: a i h (podstawa i wysokość). Funkcja obliczy pole  trojkata.

function areaT(a,h){
    return a*h/2
}

console.log("zadanie 2")
console.log(areaT(10, 20) ) // 100
console.log(areaT(10,2.4) ) // 12


// 3. Napisz funkcję isDiv(), która przyjmie dwie liczby całkowite n i k. Wynikiem działania funkcji powinna być wartość logiczna czy k dzieli n

// function isDiv(n,k){
//     if(n%k==0){
//         return true
//     }
//     else{
//         return false
//     }
// }

function isDiv(n,k){
    return n%k==0
}


console.log("zadanie 3")
console.log(isDiv(10, 3))  // false 0
console.log(isDiv(12, 4)) // true 1


// 4. Zapisz funkcję isLeap, która sprawdzi, czy rok (przekazany jej jako argument) jest rokiem przestępnym (dzieli się przez 4 i nie dzieli przez 100) lub dzieli przez 400  

function isLeap(year){
    return (year%4==0 && year%100!=0 || year%400==0)
}


console.log("zadanie 4")
console.log(isLeap(2000))    /// true 1
console.log(isLeap(1900))  // false 0 
console.log(isLeap(2024)) // true
console.log(isLeap(2023)) // false

// 5. Zapisz funkcję isEmpty, która zwraca wartość prawdy, gdy tekst będący jej parametrem jest pusty, oraz fałsz w przeciwnym wypadku
function isEmpty(text) {
    return text.length==0
}

console.log("zadanie 5")
console.log(isEmpty(""))      // true
console.log(isEmpty("dd"))    // false


