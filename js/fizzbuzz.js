/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”*/

// variabili globali 
 let risultato;
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
for (let i = 1; i <= 100 ; i++){
    if (i % 3 === 0) { //per i multipli di 3 stampi “Fizz”
        risultato += "Fizz"
    } else if(i % 5 === 0) {  // per i multipli di 5 stampi “Buzz”
        risultato += "Buzz"
    } else {
        risultato += i + " "; 
    }
    console.log(risultato);
}




// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
