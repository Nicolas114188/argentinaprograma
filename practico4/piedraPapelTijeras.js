const opcinesJuego=["piedra","papel","tijeras"];
const posibleJugada=["Empate","Gana la computadora","Gana el usuario"];
const readlineSync = require('readline-sync');
//Cantidad de jugada
const numeroJugada=readlineSync.questionInt("Cuantas veces jugas: ");
//Funcion de la Computadora
function obtenerJugadaComputadora(){
    let jugadaObtenida;
    jugadaObtenida=Math.floor(Math.random()*3);
    return opcinesJuego[jugadaObtenida];
}
//Función del Usuario
function obtenerJugadaUsuario(){
    let jugadaIngresada;
    do{
        jugadaIngresada = readlineSync.question("Para este juego elija piedra, papel o tijeras: ");
    }while(jugadaIngresada!==opcinesJuego[0]&&jugadaIngresada!==opcinesJuego[1]&&jugadaIngresada!==opcinesJuego[2]);    
    return jugadaIngresada;
}
//Fución Ganador
function determinarGanador(jugadaComputadora,jugadaUsuario){
    let resultado;
    if((jugadaComputadora===opcinesJuego[0]&&jugadaUsuario===opcinesJuego[2])||
             (jugadaComputadora===opcinesJuego[1]&&jugadaUsuario===opcinesJuego[0])||
             (jugadaComputadora===opcinesJuego[2]&&jugadaUsuario===opcinesJuego[1])){
        resultado=posibleJugada[1];
    }else if((jugadaComputadora===opcinesJuego[1]&&jugadaUsuario===opcinesJuego[2])||
             (jugadaComputadora===opcinesJuego[0]&&jugadaUsuario===opcinesJuego[1])||
             (jugadaComputadora===opcinesJuego[2]&&jugadaUsuario===opcinesJuego[0])){
        resultado=posibleJugada[2];
    }else {
        resultado=posibleJugada[0];
    }
    return resultado;
}
//funcíon jugar Piedra Papel o Tijera()
function jugarPiedraPapelTijera(){
    let cantGanadaComputadora=0;
    let cantGanadaUsuario=0;
    let jugadaUsuario;
    let jugadaComputadora
    let ganador;
    for(let i=0;i<numeroJugada;i++){
        //Variable de cada jugada
        jugadaUsuario = obtenerJugadaUsuario();  
        jugadaComputadora = obtenerJugadaComputadora();
        //imprimir la jugada
        console.log("La computadora eligio: "+jugadaComputadora);
        console.log("El usuario eligio: "+jugadaUsuario);
        //variable de quien gano
        ganador=determinarGanador(jugadaComputadora,jugadaUsuario);
        if(ganador===posibleJugada[1]){
            cantGanadaComputadora+=1;
        }else if(ganador===posibleJugada[2]){
            cantGanadaUsuario+=1;
        }
        console.log("La computadora: "+cantGanadaComputadora+" y el usuario: "+cantGanadaUsuario);
    }
    if(cantGanadaComputadora>cantGanadaUsuario){
        ganador=posibleJugada[1];
    }else if(cantGanadaUsuario>cantGanadaComputadora){
        ganador=posibleJugada[2];
    }else{
        ganador=posibleJugada[0];
    }
    console.log("El resultado fue: "+ganador);
}
//llamado de la función jugarPiedraPapelTijera()
jugarPiedraPapelTijera();