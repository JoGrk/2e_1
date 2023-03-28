'use strict'
//1 napisz funkcję, która zwróci inicjały osoby podanej jako paramery, podajemy imię i nazwisko. Wywołaj funkcję dla kilku osób

function getInitials(firstName, lastName){
    return firstName[0] + lastName[0]
}
console.log(getInitials('Marcel', 'Kozłowski'))
