// ==== Arrays  ====
let numeros = [1, 2, 3, 4, 5];
// 1. Iteración
numeros.forEach(num => console.log(num));

// 2. Búsqueda
let encontrado = numeros.find(num => num > 3);
console.log("Número encontrado:", encontrado);  // 4

// 3. Transformación
let cuadrados = numeros.map(num => num ** 2);
console.log("Cuadrados:", cuadrados);  // [1, 4, 9, 16, 25]

// 4. Filtrado
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);  // [2, 4]

// 5. Verificación
let todosPares = numeros.every(num => num % 2 === 0);
console.log("Todos pares:", todosPares);  // false
let algunoPar = numeros.some(num => num % 2 === 0);
console.log("Alguno par:", algunoPar);  // true


// ==== Objects  ====
let persona = {
  nombre: "Luis",
  edad: 28,
};
// 1. Añadir
persona.profession = "Desarrollador";
console.log("Persona:", persona);

// 2. Modificar
persona.edad = 29;
console.log("Edad modificada:", persona.edad);  // 29

// 3. Eliminar
delete persona.profession;
console.log("Persona después de eliminar profesión:", persona);