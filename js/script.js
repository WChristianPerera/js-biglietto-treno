// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 



//chiedere quanti chilometri percorrere
// chiedere l'età 
// calcolare i km in euro 
// applicare lo sconto in base all'età
// fixare il risultato 






let km = prompt('Quanti chilometri vuoi percorrere ?');

let age = prompt('Quanti anni hai ?');

let euro = (0.21 * km);
let Underprice = (euro - (euro * 20 / 100));
let Overprice = (euro - (euro * 40 / 100));

if (age >= 18 && age <= 65) {
    document.getElementById("euros").innerHTML = euro.toFixed(2);
}
if (age < 18) {
    document.getElementById("euros").innerHTML = Underprice.toFixed(2);
}
if (age > 65) {
    document.getElementById("euros").innerHTML = Overprice.toFixed(2);
}

if (isNaN(km) || isNaN(age)) {
    document.getElementById("euros").innerHTML = alert("Attenzione! Valori non validi! (Ricaricare la pagina");
}




