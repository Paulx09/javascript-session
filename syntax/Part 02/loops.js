// ==== WHILE LOOP ====
let contador = 0;

while (contador < 5) {
  console.log("Contador:", contador);
  contador++;
}

// Uso de break
let i = 0;
while (i < 10) {
  if (i === 5) break;  // Sale del bucle
  console.log("i:", i);
  i++;
}

// Uso de continue
for (let j = 0; j < 5; j++) {
  if (j === 2) continue;  // Salta el número 2
  console.log("j:", j);
}


// ==== FOR LOOP ====
for (let i = 0; i < 5; i++) {
  console.log("i:", i);
}
// Anidación
for (let j = 0; j < 3; j++) {
  for (let k = 0; k < 2; k++) {
    console.log(`j: ${j}, k: ${k}`);
  }
}
// Uso de -- (decremento)
let contador2 = 5;
while (contador > 0) {
  console.log("Contador:", contador);
  contador--;  // Decrementa en 1
}


// ==== DO WHILE LOOP ====
let respuesta;
do {
  respuesta = confirm("¿Quieres continuar?");
} while (respuesta);
console.log("Has decidido salir.");


// ==== SWITCH STATEMENT ====
let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

// Comparación con if
if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miércoles");
} else {
  console.log("Otro día");
}