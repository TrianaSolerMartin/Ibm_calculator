"use strict";
// console.log("hola typescript")
// hemos declarado 3 constantes
//peso
//altura
// ibm la cual es una funcion que reutiliza los datos de altura y peso 
//utilizamos al comienz un void como resultado de nustra funcion 
function IbmCalculator(altura, peso) {
    const ibm = peso / (altura ** 2);
    if (ibm < 25) {
        return ("estas super fit");
    }
    else if (ibm >= 25 && ibm >= 27) {
        return ("ESTAS EN BUEN PESO");
    }
    else {
        return ("tienes sobrepeso");
    }
}
console.log(IbmCalculator(1.70, 64));
console.log(IbmCalculator(1.90, 84));
console.log(IbmCalculator(1.90, 94));
console.log(IbmCalculator(1.70, 74));
