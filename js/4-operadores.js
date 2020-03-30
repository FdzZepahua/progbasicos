var valores = [true, 5, false, "hola", "adios", 2];
// Cual de los 2 elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
function mayor() {
    var resultado = valores[3] > valores[4];
    alert(valores[3] + " > " + valores[4] + " = " + resultado);
}

// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];

// Obtener un resultado TRUE
function verdadero() {
    var resultado = valor1 || valor2;
    alert(resultado);
}

// Obtener un resultado FALSE
function falso() {
    resultado = valor1 && valor2;
    alert(resultado);
}

// Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];

function suma() {
    var suma = num1 + num2;
    alert(num1 + " + " + num2 + " = " + suma);
}

function resta() {
    var resta = num1 - num2;
    alert(num1 + " - " + num2 + " = " + resta);
}

function mult() {
    var multiplicacion = num1 * num2;
    alert(num1 + " * " + num2 + " = " + multiplicacion);
}

function div() {
    var division = num1 / num2;
    alert(num1 + " / " + num2 + " = " + division);
}

function diventera() {
    var modulo = num1 % num2;
    alert(num1 + " % " + num2 + " = " + modulo);
}
