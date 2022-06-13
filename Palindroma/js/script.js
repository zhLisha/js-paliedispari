/* 
- Chiedere all'utente di inserire una parola
- Controllare se la parola inserita e' palindroma
*/ 

// Chiedere all'utente di inserire una parola
const userWord = prompt('Scrivi una parola');

// Dichiaro/Invoco la mia funzione
const userPalindromeWord = isPalindromeWord(userWord);

// Messaggio opzionale per l;utente
if(userPalindromeWord !== true) {
    alert('La parola inserita non è Palidroma');
} else {
    alert('La parola inserita è Palidroma');
}


// Verificare se la parola dell'utente all'inverso presenta le stesse lettere lette in forma normale.
function isPalindromeWord(string) {
    // Dichiaro di default che la parola inserita e' false 
    let elementFound = false;

    // Variabile da riempire con l'inversione della parola inserita dall'utente
    let reverseString ='';

    // Convertire la parola al contrario
    for(let i = string.length - 1; i >= 0; i--) {
        // Aggiungere lettera per lettera della parola convertita (striing[i]) nella variabile dichiarata precedentemente (reverseString) per ottenere un'unica stringa
        reverseString += string[i];
    } 

    // Se la parola inserita dall'utente e' uguale al reverseString allora elementFound diventa da false a true
        if(string === reverseString) {
            elementFound = true;
        }

    return elementFound;
}