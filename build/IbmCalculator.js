"use strict";
// console.log("hola typescript")
// hemos declarado 3 constantes
//peso
//altura
// ibm la cual es una funcion que reutiliza los datos de altura y peso 
function IbmCalculator(altura, peso) {
    const ibm = peso / (altura ** 2);
    return console.log(ibm);
}
IbmCalculator(170, 74);
IbmCalculator(179, 74);
IbmCalculator(140, 74);
IbmCalculator(190, 74);
