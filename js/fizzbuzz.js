/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”*/

// variabili globali 
 const container =document.getElementById("contenitore")



/*Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.*/
for (let i = 1 ; i <= 100 ; i++){
    let risultato =i;
    let classe = "";
    if (i % 3 === 0 && i % 5 === 0) {// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        risultato = "FizzBuzz" 
        classe = "fizzbuzz";
    } else if(i % 5 === 0) {  // per i multipli di 5 stampi “Buzz”
        risultato = "Buzz"
        classe = "buzz";
    } else if (i % 3 === 0) { //per i multipli di 3 stampi “Fizz”
        risultato = "Fizz"
        classe = "fizz";
    } else {
        risultato = i + " ";
    }
    container.innerHTML += `<div class="square ${classe}">${risultato}</div>`;
    
}





