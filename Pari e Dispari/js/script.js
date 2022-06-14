/* 
- L'utente sceglie pari o dispari e ubserusce un numero
- Generare un numero random per pc
- Sommiamo i due numeri e stabiliamo se il risultato e' pari o dispari
- Dichiariamo l'esito
*/ 

// Chiediamo all'utente Pari o Dispari + un numero
const userAnswer = prompt('Scrivi pari o dispari');
const userNumber = parseInt( prompt('Dammi un numero') );


// Invochiamo la funzione numero random
const randomNumberPc = numberPc(1, 10);
// Invochiamo la funzione Somma dei numeri random e dell'utente
const finalResult = sumAllNumber(userNumber, randomNumberPc)
// Invochiamo la funzione pari dispari
const numberEvenOrOdd = isEvenorOdd(finalResult);


// Verifichiamo che la risposta inserita dall'utente e' uguale al risultato ottenuto dalla somma dei suoi numeri e quello random
if(userAnswer === numberEvenOrOdd) {
    alert(`Congratulazioni, hai risposto esatto. Risultato: ${userNumber} + ${randomNumberPc} = ${finalResult}`)
} else {
    alert(`Mi dispiace, hai dato la risposta sbagliato. Risultato: ${userNumber} + ${randomNumberPc} = ${finalResult}`)
}


// Generiamo un numero random per il pc
function numberPc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Somma fra numeri dell'utente e rundomNumberPc 
function sumAllNumber(number, numer1) {
    const sum = number + numer1; 
    return sum;
}

// Verifichiamo se il numero e' pari o dispari
function isEvenorOdd(number) {
    let sumAllNumber;
    if(number % 2 !== 0) {
        sumAllNumber = 'dispari';
    } else {
        sumAllNumber = 'pari';
    }
    return sumAllNumber;
}





