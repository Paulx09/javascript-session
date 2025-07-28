// Creación de un array
const frutas = ['manzana', 'banana', 'naranja', 'pera', 'uva'];
console.log("Array original:", frutas);

const ultimaFruta = frutas[frutas.length - 1]; // 'uva' (siempre accede al último)
console.log("\n=== Acceso a elementos ===");
console.log("Primera fruta:", primeraFruta);
console.log("Segunda fruta:", segundaFruta);
console.log("Última fruta:", ultimaFruta);
// Intento de acceso a índice inexistente
console.log("Elemento 10 (no existe):", frutas[10]); // undefined


// ==== MÉTODOS FUNDAMENTALES ====
// 1. AÑADIR ELEMENTOS
frutas.push('kiwi');         // Añade al FINAL
frutas.unshift('fresa');     // Añade al INICIO
console.log("\n=== Después de añadir ===");
console.log("Con push y unshift:", frutas);

// 2. ELIMINAR ELEMENTOS
frutas.pop();                // Elimina el ÚLTIMO
frutas.shift();              // Elimina el PRIMERO
console.log("\n=== Después de eliminar ===");
console.log("Con pop y shift:", frutas);

// 3. MODIFICAR ARRAYS
const frutasTropicales = frutas.slice(1, 3);  // Copia desde índice 1 a 2 (no incluye 3)
console.log("\n=== Slice (copia) ===");
console.log("Frutas tropicales:", frutasTropicales);
frutas.splice(1, 2, 'mango', 'piña');  // En posición 1, elimina 2 items y añade otros
console.log("\n=== Splice (modifica) ===");
console.log("Después de splice:", frutas);