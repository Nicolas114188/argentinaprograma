//Lista de Invitados:
let persona=["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let admitidos=[];
let rechazados=[];

for(let i=0;i<persona.length;i++){
    if(persona[i]!=="Jose" && persona[i]!=="Sofia"){
        admitidos.push(persona[i]);
    }else{
        rechazados.push(persona[i]);
    }
}
//imprimir por invitado admitidos
console.log("La lista de invitados admitidos es:");
for(let i=0;i<admitidos.length;i++){
    console.log(admitidos[i]);
}
//imprimir por invitado rechazados
console.log("La lista de invitados rechazados es:");
for(let i=0;i<rechazados.length;i++){
    console.log(rechazados[i]);
}

//ordenar:
admitidos.sort();
rechazados.sort();

//imprimir por invitado admitidos
console.log("La lista ordenada de invitados admitidos es:");
for(let i=0;i<admitidos.length;i++){
    console.log(admitidos[i]);
}
//imprimir por invitado rechazados
console.log("La lista ordenada de invitados rechazados es:");
for(let i=0;i<rechazados.length;i++){
    console.log(rechazados[i]);
}