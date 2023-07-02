const opcinesJuego=["piedra","papel","tijeras"];
const posibleJugada=["Empate","Gana la computadora","Gana el usuario"];
//Funcion de la Computadora
function obtenerJugadaComputadora(){
    let jugadaObtenida;
    jugadaObtenida=Math.floor(Math.random()*3);
    return opcinesJuego[jugadaObtenida];
}
//Función del Usuario
function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
    let jugadaIngresada = readlineSync.question("Para este juego elija piedra, papel o tijeras: ");
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
    //Variable de cada jugada
    let jugadaUsuario= obtenerJugadaUsuario();  
    let jugadaComputadora= obtenerJugadaComputadora();
    //imprimir la jugada
    console.log("La computadora eligio: %s.",jugadaComputadora);
    console.log("El usuario eligio: %s.",jugadaUsuario);
    //variable de quien gano
    let ganador=determinarGanador(jugadaComputadora,jugadaUsuario);
    console.log("El resultado fue: %s.",ganador);
}
//llamado de la función jugarPiedraPapelTijera()
jugarPiedraPapelTijera();