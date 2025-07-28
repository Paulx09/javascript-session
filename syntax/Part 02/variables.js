// 1. let
let x = 10;
x = 20;  // Se puede reasignar
console.log("Valor de x:", x);  // 20

// 2. const
const PI = 3.14;
// PI = 3.14159;  // Esto causaría un error
console.log("Valor de PI:", PI);  // 3.14

// 3. var (no recomendable)
var y = 5;
if (true) {
  var y = 10;  // Se sobrescribe
}
console.log("Valor de y:", y);  // 10