/* Inizializzo ---> assegno delle variabili alle parole Fizz e Buzz.
Devo dire al programma quali numeri da 1 a 100 sono multipli di 3, 
e quali sono multipli di 5 e quali di entrambi.

Per i multipli di 3 devo stampare Fizz;
per i multipli di 5 devo stampare Buzz,
per i multipli di entrambi devo stampare FizzBuzz.

Stampo i numeri da 1 a 100*/

//! Inizializzo variabile contenete la parola Fizz//
const fizzWord = "fizz";
console.log(fizzWord);
//! Inizializzo variabile contenete la parola Buzz//
const buzzWord = "buzz";
console.log(buzzWord);

//TODO inizializzo il ciclo for: dichiaro una variabile "i" con valore 0.
for (let i = 0; i < 101; i = i + 1) { /*Finche i < 101 è VERA il ciclo eseguirà le istruzioni all'interno del ciclo FOR;
                                        alla fine di ogni "giro" sommerà +1 a "i"*/
                                        
    //TODO Assegno alla variabile "element" il valore "i"
    let element = i;
    
//! Imposto un test condizionale 
//! metto per prima la condizione nella quale "i" è multiplo sia di 3 che di 5
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        element = fizzWord + buzzWord; //* se si verificasse questa condizione "element" avrebbe come valore la concatenazione di fizzWord + buzzWord 
    } else if ((i % 3) == 0) { //! poi metto la condizione x la quale "i" è multiplo di 3 e non di 5
        element = fizzWord; //* mentre in questo caso "element" avrebbe come valore la parola fizzWord
    } else if ((i % 5) == 0){ //! infine metto la condizone x la quale "i" è multiplo di 5 e non di 3
        element = buzzWord; //* e in questo caso "element" avrebbe come valore la parola buzzWord
    }

    console.log(element); //TODO infine stampo in console il valore di "element"
}
