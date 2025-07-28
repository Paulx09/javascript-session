// VAR
var juguete = "carrito";
if (true) {
    var juguete = "muñeca"; // Sobrescribe el juguete anterior
}
console.log(juguete); // "muñeca"

// LET
let juguete = "carrito";
if (true) {
    let juguete = "muñeca"; // Nueva caja dentro del bloque
    console.log(juguete); // "muñeca"
}
console.log(juguete); // "carrito"