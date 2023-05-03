function viajar(destino) {
  if (destino === "brasil") {
    console.log("gire a la izquierda");
  } else if (destino === "argentina") {
    console.log("gire a la Derecha");
  } else {
    console.log("te perdistes");
  }
}

viajar("colombia");

function PuedeManejar(edad) {
  if (edad >= 18) {
    console.log(true);
  } else if (edad <= 18) {
    console.log(false);
  } else {
    console.log("dato invalido");
  }
}

PuedeManejar("*");
