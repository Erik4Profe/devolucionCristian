const l = document.getElementsByClassName("listo");
    const aux = document.getElementById("barra");
let desc = "";

// Responde a "¿quién soy?"
const yo = "¡Hola! Soy Cristian y tengo 15 años.";
// Responde a "mis gustos"
const gus = "Personalmente me gusta salir con mis amigos, jugar fútbol, escuchar música, viajar y conocer lugares nuevos.";
const amigous = "A pesar de que tengo muchos amigos, los más cercanos son Hernan, Martina, Thiago, Heredia, Dante y Lauty.";

// Responde a "idolo"
const ido = "Mi mayor ídolo es Cristian Gabriel Romero, jugador de fútbol.";

// Esto se encarga de limpiar la barra de navegación
const terminamos = "";


function miFuncion(desc) {
    aux.value=desc;
}


