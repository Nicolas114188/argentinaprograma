let cita="Tres tristes tigres comen trigo en un trigal";
let substring="tigres comen trigo";

//a. Recuperacíon la longitud de cita
let tamañoDeCita=cita.length;
console.log("El tamaño de la cita es: %i",tamañoDeCita);

//b. La posicion del indice
let indice=cita.indexOf(substring);
console.log("El indice del substring es: %i",indice); 

//c. Cita Revisada
let citaRevisada=cita.slice(0,indice)+" "+substring;
console.log(citaRevisada);