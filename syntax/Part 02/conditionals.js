let nota = 85;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Anidación
if (nota >= 80) {
  if (nota >= 90) {
    console.log("A");
  } else {
    console.log("B");
  }
} else {
  console.log("C");
}