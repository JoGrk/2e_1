// 1. przygotuj tablicę  liczby 10 liczb całkowitych [1, 4, 3, 7, -3, 0, 5, 9, -2, 10]
let myTab=[1,4,3,7,-3,0,5,9,-2,10]

// 2. wypisz pierwszy i ostatni element
console.log(`pierwszy element: ${myTab[0]}, ostatni element: ${myTab[9]}`)
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
for(let x of myTab1){
    console.log(x);
}
// 9. wypisz elementy tablicy teksty, których długość jest mniejsza od 5 znaków

for(let x of myTab1){
    if(x.length<5){
        console.log(x)
    }
}

// 10. wypisz elementy tablicy teksty, które zaczynają się literą s