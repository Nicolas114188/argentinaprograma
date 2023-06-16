const readlineSync = require('readline-sync');
let numero = parseInt(readlineSync.question("Ingrese un numero: "));

if(numero>0){
    console.log("El numero es positivo");
}else if(numero===0){
    console.log("El numero es cero");
}else if(numero<0){
    console.log("El numero es negativo");
}else{
    console.log("Error no ingreso un numero");
}