const botones = document.querySelectorAll(".boton-jugada");
const contenedorResultado = document.getElementById("resultados");
const marcadorUsuario = document.querySelector(".contador-usuario");
const marcadorOrdenador = document.querySelector(".contador-ordenador");

const ataquesEnemigo = ["Piedra", "Papel", "Tijera"]; 

let jugadaUsuario = "";
let resultado = "";

let puntosUsuario = 0;
let puntosOrdenador = 0;




botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
        jugadaUsuario = event.target.dataset.jugada
        
        combate()
    })
})

function combate () {
   let ataqueEnemigo = ataquesEnemigo[jugadaAleatoria()]
   
   

   if (jugadaUsuario.toLowerCase() === ataqueEnemigo.toLowerCase()) {
    contenedorResultado.innerHTML = `El usuario saco: ${jugadaUsuario.toUpperCase()} y el ordenador saco: ${ataqueEnemigo.toUpperCase()}. Es un empate!!`
    puntosUsuario += 5;
    puntosOrdenador += 5;
    marcadorUsuario.textContent = puntosUsuario;
    marcadorOrdenador.textContent = puntosOrdenador;
   }
   else if (jugadaUsuario.toLowerCase() === "piedra" && ataqueEnemigo.toLowerCase() === "tijera") {
    contenedorResultado.innerHTML = `El usuario saco: ${jugadaUsuario.toUpperCase()} y el ordenador saco: ${ataqueEnemigo.toUpperCase()}. Ganaste!!`
    puntosUsuario += 10;
    marcadorUsuario.textContent = puntosUsuario;
   }
   else if (jugadaUsuario.toLowerCase() === "tijera" && ataqueEnemigo.toLowerCase() === "papel") {
    contenedorResultado.innerHTML = `El usuario saco: ${jugadaUsuario.toUpperCase()} y el ordenador saco: ${ataqueEnemigo.toUpperCase()}. Ganaste!!`
    puntosUsuario += 10;
    marcadorUsuario.textContent = puntosUsuario;
   }
   else if (jugadaUsuario.toLowerCase() === "papel" && ataqueEnemigo.toLowerCase() === "piedra") {
    contenedorResultado.innerHTML = `El usuario saco: ${jugadaUsuario.toUpperCase()} y el ordenador saco: ${ataqueEnemigo.toUpperCase()}. Ganaste!!`
    puntosUsuario += 10;
    marcadorUsuario.textContent = puntosUsuario;
   }
   else {
    contenedorResultado.innerHTML = `El usuario saco: ${jugadaUsuario.toUpperCase()} y el ordenador saco: ${ataqueEnemigo.toUpperCase()}. Lo siento, has perdido!!`
    puntosOrdenador += 10;
    marcadorOrdenador.textContent = puntosOrdenador;
   }
}

function jugadaAleatoria () {
    return Math.floor(Math.random()*3)
}








/*function botonSeleccionado (event) {
    console.log("click");
}*/