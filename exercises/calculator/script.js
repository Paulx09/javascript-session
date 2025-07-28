// Crear una función para "obtener" los valores del formulario

function obtenerValoresCalculadora() {
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const operacionSelect = document.getElementById('operacion');

    // Obtener los valores de los inputs
    const num1 = parseFloat(numero1Input.value);
    const num2 = parseFloat(numero2Input.value);
    const operacion = operacionSelect.value; // El valor de la opción seleccionada

    // Devolver un objeto con los valores
    return {
        num1: num1,
        num2: num2,
        operacion: operacion
    };
}

// Esta función tomará los argumentos (los números y la operación).
function calcular(numero1, numero2, operacion) {
    let resultado; // Declaramos una variable para almacenar el resultado

    // Usamos un switch para manejar las diferentes operaciones
    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2; // Operador de Suma
            break;
        case 'resta':
            resultado = numero1 - numero2; // Operador de Resta
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2; // Operador de Multiplicación
            break;
        case 'division':
            // Manejo de la división por cero
            if (numero2 === 0) {
                return "Error: División por cero no permitida.";
            }
            resultado = numero1 / numero2; // Operador de División
            break;
        case 'modulo':
            resultado = numero1 % numero2; // Operador de Resto de división
            break;
        case 'exponente':
            resultado = numero1 ** numero2; // Operador de Exponente
            break;
        default:
            return "Operación no válida."; // Manejo de caso por defecto
    }

    return resultado;
}

// Función para ejecutar la calculadora y mostrar en consola.
function ejecutarCalculadora() {
    const valores = obtenerValoresCalculadora(); // Obtenemos los valores del formulario

    // Validar que los inputs sean números válidos
    if (isNaN(valores.num1) || isNaN(valores.num2)) {
        console.error("Error: Por favor, introduce números válidos en ambos campos.");
        return; // Salir de la función si hay un error
    }

    const resultadoCalculo = calcular(valores.num1, valores.num2, valores.operacion);

    console.log(`--- Resultado de la Operación ---`);
    console.log(`Número 1: ${valores.num1}`);
    console.log(`Número 2: ${valores.num2}`);
    console.log(`Operación: ${valores.operacion}`);
    console.log(`Resultado: ${resultadoCalculo}`);
    console.log(`-------------------------------`);
}

// Instrucción final para los alumnos:
// Después de llenar el formulario, abre la consola del navegador y escribir:
// "ejecutarCalculadora()"