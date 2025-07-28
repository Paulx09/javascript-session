// Declaración
function suma(a, b) {
  return a + b;
}
// Expresión
const multiplicar = function(a, b) {
  return a * b;
};
console.log("Suma:", suma(2, 3));  // 5
console.log("Multiplicación:", multiplicar(2, 3));  // 6


// ====  Creando tu función ====
function calcularArea(base, altura) {
  return (base * altura) / 2;  // Área de un triángulo
}
console.log("Área:", calcularArea(5, 10));  // 25


// Parámetros vs. Argumentos. Importancia del orden de parámetros
function mostrarDatos(nombre, edad) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
mostrarDatos("Carlos", 30);  // Correcto
// mostrarDatos(30, "Carlos");  // Incorrecto, el orden importa


// ==== Function Expression ====
const restar = function(a, b) {
  return a - b;
};
console.log("Resta:", restar(10, 5));  // 5

// Hoisting
console.log("Suma:", sumar(5, 3));  // undefined
var sumar = function(a, b) {
  return a + b;
};

// ==== Arrow Functions ====
const multiplicar2 = (a, b) => a * b;  // Return implícito
console.log("Multiplicación:", multiplicar(4, 5));  // 20
const saludar = nombre => `Hola, ${nombre}!`;
console.log(saludar("Ana"));  // "Hola, Ana!"