// 1. Number
edad = 25;
temperatura = -5.5;
console.log("Edad:", edad, "Temperatura:", temperatura);

// 2. String
saludo = "Hola, mundo!";
nombre = 'Juan';
mensaje = `Bienvenido, ${nombre}!`;
console.log(mensaje);

// 3. Boolean
esEstudiante = true;
tieneTrabajo = false;
console.log("Es estudiante:", esEstudiante, "Tiene trabajo:", tieneTrabajo);

// 4. Undefined: Estado "no asignado"
let miHabitación;
console.log("Variable sin definir:", miHabitación);

// 5. Null: Decisión consciente de no hay valor
miHabitacion2 = null;
console.log("Valor nulo:", miHabitacion2);

// 6. Symbol
simbolo1 = Symbol('descripcion');
simbolo2 = Symbol('descripcion');
console.log("¿Son iguales los símbolos?", simbolo1 === simbolo2);  // false

// 7. BigInt
numeroGrande = BigInt(123456789012345678901234567890);
console.log("Número grande:", numeroGrande);