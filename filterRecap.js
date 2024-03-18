// .filter

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ["apple",  "banana", "apple", "pineapple", "orange"]
// qualunque array possiede il metodo .filter
// Il metodo .filter restituisce un array che contiene soltanto i valori
// che soddisfano una condizione logica, definita da una funzione di callback.


// arrayDaFiltrare.filter(callbackFx)

function isEven(numero) {
    return numero % 2 === 0;
}

numeri.filter(isEven) // questa scrittura ci restituisce un NUOVO array (numeri NON viene modificato assolutamente)
// nel nuovo array avremo solo i numeri pari.

// La nostra funzione di callback riceve ad uno ad uno tutti i valori dell'array
// Quando la funzione restituisce vero, il valore che stiamo controllando sarà inserito nell'array filtrato
// Altrimenti, il valore controllato sarà scartato.