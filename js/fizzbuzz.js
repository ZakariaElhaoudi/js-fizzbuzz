/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”*/

// variabili globali 
 let risultato = " ";
 const container =document.getElementById("contenitore")


/*Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.*/
for (let i = 1 ; i <= 100 ; i++){
    if (i % 3 === 0 && i % 5 === 0) {// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        risultato = "FizzBuzz"
    } else if(i % 5 === 0) {  // per i multipli di 5 stampi “Buzz”
        risultato = "Buzz" 
    } else if (i % 3 === 0) { //per i multipli di 3 stampi “Fizz”
        risultato = "Fizz"
    } else {
        risultato = i + " "; 
    }
   const number =`<div class="square">${risultato}</div>`;
   container.innerHTML += number
}





