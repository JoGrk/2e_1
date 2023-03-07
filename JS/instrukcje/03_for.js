// 1. przygotuj tablicę  liczby 10 liczb całkowitych [1, 4, 3, 7, -3, 0, 5, 9, -2, 10]
let myTab=[1,4,3,7,-3,0,5,9,-2,10]

// 2. wypisz pierwszy i ostatni element
// console.log(`pierwszy element: ${myTab[0]}, ostatni element: ${myTab[9]}`)
// 3. wypisz 10 kolejnych liczb naturalnych (od 0, mniejsze od 10)
// for(let i=0;i<10;i++){
//     console.log(i)
// }
// 4. wypisz wszystkie elementy tablicy liczby 

// for(let i=0;i<10;i++){
//     console.log(`${myTab[i]}`)
// }


// 5. wypisz wszystkie dodatnie liczby z tablicy liczby
// for(let i=0; i<10; i++){
//     if(myTab[i]>0)
//         console.log(`${myTab[i]}`)
// }

// 6. wypisz wszystkie parzyste liczby z tablicy liczby

// for(let i=0; i<10; i++){
//     if(myTab[i]%2==0){
//         console.log(myTab[i])
//     }

// }

// 7. Przygotuj tablicę teksty ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']

let myTab1 = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']

// 8. wypisz wszystkie elementy tablicy teksty 
// for(let x of myTab1){
//     console.log(x);
// }
// 9. wypisz elementy tablicy teksty, których długość jest mniejsza od 5 znaków

// for(let x of myTab1){
//     if(x.length<5){
//         console.log(x)
//     }
// }

// 10. wypisz elementy tablicy teksty, które zaczynają się literą s

// for(let month of myTab1){
//     if(month[0]=='s'){
//         console.log(month)
//     }
// }

// 11. Korzystając z pętli while wypisz elementy ciągu 2 4 6 8 ... mniejsze od 20

let fire=2
while(fire<20){
    console.log(fire)
    fire+=2
}

// 12. korzystając z pętli while wypisz wszystkie elementy ciągu 20 17 14 11 ... większe od 0

let liczby=20
while(liczby>0){
    console.log(liczby)
    liczby-=3
}

// 13.  wygeneruj ciąg 1 0 1 0 1 0 1 0 1 0 .... (20 liczb)
// let liczba=1
// for(let i=0 ; i<20 ; i++){
//     console.log(liczba)
//     if(liczba==1){
//         liczba--    
//     }
//     else {        liczba++
//     }
// }
for (let i=1 ; i<=20 ; i++){
    console.log(i%2)
}

// 14. do zmiennej tekst przypisz dowolny tekst. Wypisz z tego tekstu wszystkie małe litery
let tekst = 'tEkSt';
for(let i=0; i<tekst.length; i++){
    if(tekst[i]>='a' && tekst[i]<='z'){
        console.log(tekst[i]);
    }
}

for (let znak of tekst){
    if (znak >='a' && znak >= 'z'){
        console.log(znak)
    }
}