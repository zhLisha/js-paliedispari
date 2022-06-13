/* 
- L'utente sceglie pari o dispari e ubserusce un numero
- Generare un numero random per pc
- Sommiamo i due numeri e stabiliamo se il risultato e' pari o dispari
- Dichiariamo l'esito
*/ 

// Chiediamo all'utente Pari o Dispari + un numero
const userAnswer = prompt('Scrivi pari o dispari');
const userNumber = prompt('Dammi un numero');


// Generiamo un numero random per il pc
const randomNumberPc = numberPc(1, 1000);
function numberPc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Somma fra numeri dell'utente e rundomNumberPc 
const finalResult = sumAllNumbers(userNumber, randomNumberPc);
function sumAllNumbers(number, number1) {
    let sum = parseInt(number) + number1; 
    return sum;
}


// Verifichiamo se il numero e' pari o dispari
let numberEvenOrOdd;
if(finalResult % 2 !== 0) {
    numberEvenOrOdd = 'dispari';
} else {
    numberEvenOrOdd = 'pari';
}

// Verifichiamo che la risposta inserita dall'utente e' uguale al risultato ottenuto dalla somma dei suoi numeri e quello random
if(userAnswer === numberEvenOrOdd) {
    alert(`Congratulazioni, hai risposto esatto. Risultato: ${userNumber} + ${randomNumberPc} = ${finalResult}`)
} else {
    alert(`Mi dispiace, hai dato la risposta sbagliato. Risultato: ${userNumber} + ${randomNumberPc} = ${finalResult}`)
}
