/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

let km = prompt("Quanti chilometri devi percorrere?");
console.log('km', km, typeof km);

let kmInNumero = parseInt(km);
console.log('kmInNumero', kmInNumero, typeof kmInNumero);

while (isNaN(kmInNumero)) {
    alert('INSERISCI UN NUMERO!!')
    km = prompt("Quanti chilometri devi percorrere?");
    kmInNumero = parseInt(km);
    console.log('kmInNumero', kmInNumero, typeof kmInNumero);
}

let eta = prompt("Quanti anni hai?");
console.log('eta',  eta, typeof eta);

let etaInNumero = parseInt(eta);
console.log('etaInNumero', etaInNumero, typeof etaInNumero);

while (isNaN(etaInNumero)) {
    alert('INSERISCI UN NUMERO!!')
    eta = prompt("Quanti chilometri devi percorrere?");
    etaInNumero = parseInt(eta);
    console.log('etaInNumero', etaInNumero, typeof etaInNumero);
}

let price = (kmInNumero * 0.21);
console.log('price', price, typeof price);

if (etaInNumero < 18) {
    price *= 0.8;
} else if (etaInNumero > 65) {
    price *= 0.6;
}

price = price.toFixed(2);

const myTicketQuery = document.querySelector('#myTicket > p');
const initialText = 'Il costo del tuo biglietto é: ';

myTicketQuery.innerHTML = initialText + price;
