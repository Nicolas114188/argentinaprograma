const readlineSync = require('readline-sync');
let edad = readlineSync.question("¿Que edad tiene usted? ");

if(edad>=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}
