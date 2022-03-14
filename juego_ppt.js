var jugador;
var cpu;

if (jugador == "piedra" && cpu == "papel") {
  console.log("Perdiste");
} else if (jugador == "papel" && cpu == "tijeras") {
  console.log("Perdiste");
} else if (jugador == "tijeras" && cpu == "piedra") {
  console.log("Perdiste");
} else if (cpu == jugador) {
  console.log("Empate");
} else "Ganaste";
