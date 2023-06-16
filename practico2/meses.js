const readlineSync = require('readline-sync');
let numero = parseInt(readlineSync.question("Ingrese un numero mes del anio entero comprendido entre el 1 al 12: "));

let mes=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let cantidadDeDias=0;


if(numero>=1&&numero<=12){
    numero-=1;
    if(numero===0||numero===2||numero===4||numero===6||numero===7||numero===9||numero===11){
        cantidadDeDias=31;
        console.log("La cantidad de dias del mes de "+mes[numero]+" es "+cantidadDeDias);
    }else if(numero===3||numero===5||numero===8||numero===10){
        cantidadDeDias=30;
        console.log("La cantidad de dias del mes de "+mes[numero]+" es "+cantidadDeDias);
    }else{
        cantidadDeDias=28;
        console.log("La cantidad de dias del mes de "+mes[numero]+" es "+cantidadDeDias);
    }
}else{
    console.log("Error ingrese numero entero comprendido entre el 1 al 12");
}