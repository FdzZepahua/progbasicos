///////////////////////////////////////////////////
/////////// PAGINA 1 - ALERT  /////////////////////
///////////////////////////////////////////////////

function mostrar() {
  // Al cargarse el archivo JavaScript, se muestra un mensaje
  alert("Hola Mundo!");

  // Despues del primer mensaje, se muestra otro mensaje seguido
  alert("Soy el primer script");
}

///////////////////////////////////////////////////
/////////// PAGINA 2 - MENSAJE ////////////////////
///////////////////////////////////////////////////

var mensaje = "Hola Mundo! \n Qué facil es incluir 'comillas simples' \n y \"comillas dobles\" ";
function msg() {
  alert(mensaje);
}

///////////////////////////////////////////////////
/////////// PAGINA 3 - ARREGLO SIMPLE /////////////
///////////////////////////////////////////////////

// Array que almacena los 12 meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mostrarmeses() {
  alert(meses[0] + "\n" + meses[1] + "\n" + meses[2] + "\n" + meses[3] + "\n" + meses[4] + "\n" + meses[5] + "\n" + meses[6] + "\n" + meses[7] + "\n" + meses[8] + "\n" + meses[9] + "\n" + meses[10] + "\n" + meses[11]);
}

///////////////////////////////////////////////////
/////////// PAGINA 4 - OPERADORES /////////////////
///////////////////////////////////////////////////

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

///////////////////////////////////////////////////
///// PAGINA 5 - ESTRUCTURAS DE CONTROL ///////////
///////////////////////////////////////////////////

var numero1 = 5;
var numero2 = 8;

function control() {
  if (numero1 <= numero2) {
    alert(numero1 + " no es mayor que " + numero2);
  }
  if (numero2 >= 0) {
    alert(numero2 + " es positivo");
  }
  if (numero1 < 0 || numero1 != 0) {
    alert(numero1 + " es negativo o distinto de cero");
  }
  if (++numero1 < numero2) {
    alert("Incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2);
  }
}

///////////////////////////////////////////////////
///// PAGINA 6 - ENTRADA DATOS CON CADE ///////////
///////////////////////////////////////////////////

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function ingresar() {
  var numero = prompt("Introduce tu número de tu Indentificaci\u00f3n (sin la letra)");// \u00f3 para la ó acentuada en UNICODE
  var letra = prompt("Introduce la letra de tu Indentificaci\u00f3n (en may\u00fasculas)"); // \u00fa para la ú acentuada en UNICODE
  letra = letra.toUpperCase();

  if (numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
  }
  else {
    var letraCalculada = letras[numero % 23];
    if (letraCalculada != letra) {
      alert("La letra o el n\u00famero proporcionados no son correctos");
    }
    else {
      alert("El n\u00famero de tu Indentificaci\u00f3n y su letra son correctos");
    }
  }
}

///////////////////////////////////////////////////
///////////// PAGINA 7 - FACTORIAL ////////////////
///////////////////////////////////////////////////
function hacerclic() {
  document.querySelector("#p7").onclick = factorial;
}

function factorial() {
  var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
  var resultado = 1;

  for (var i = 1; i <= numero; i++) {
    resultado *= i;
  }
  var nuevoElemento = "<br><h2>" + resultado + "</h2>";
  texto.innerHTML = texto.innerHTML + nuevoElemento;
}

window.onload = hacerclic;


///////////////////////////////////////////////////
////////// PAGINA 8 - FUNCIONES BASICAS ///////////
///////////////////////////////////////////////////

function par_impar() {
  var numero = prompt("Introduce un número entero");
  var resultado = parImpar(numero);
  alert("El número " + numero + " es " + resultado);
}

function parImpar(numero) {
  if (numero % 2 == 0) return "par";
  else return "impar";
}

///////////////////////////////////////////////////
///////////// PAGINA 9 - CADENAS //////////////////
///////////////////////////////////////////////////

function info(cadena) {
  var resultado = "La cadena \"" + cadena + "\" ";

  // Comprobar mayúsculas y minúsculas
  if (cadena == cadena.toUpperCase())
    resultado += " está formada sólo por mayúsculas";
  else if (cadena == cadena.toLowerCase())
    resultado += " está formada sólo por minúsculas";
  else
    resultado += " está formada por mayúsculas y minúsculas";
  return resultado;
}

function push() {
  alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
  alert(info("En un lugar de la mancha..."));
  alert(info("aprendiendo javascript..."));
}

///////////////////////////////////////////////////
//////// PAGINA 10 - CADENAS PALINDROMO ///////////
///////////////////////////////////////////////////

function palindromo(cadena) {
  var resultado = "La cadena \"" + cadena + "\" \n";

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for (i in letrasEspacios)
    if (letrasEspacios[i] != " ")
      cadenaSinEspacios += letrasEspacios[i];

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for (i in letras)
    if (letras[i] != letrasReves[i])
      iguales = false;

  if (iguales)
    resultado += " es un palíndromo";
  else
    resultado += " no es un palíndromo";
  return resultado;
}

function mensajes() {
  alert(palindromo("La ruta nos aporto otro paso natural"));
  alert(palindromo("Esta frase no se parece a ningun palindromo"));
}

///////////////////////////////////////////////////
///// PAGINA 10 - CADENAS PATRONES VA.. ///////////
///////////////////////////////////////////////////

function valida(campo) {
  var bRet = false;
  if (campo.value == "")
    alert("Faltan datos");
  else if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
    alert("No tiene formato de RFC");
  else
    bRet = true;
  return bRet;
}

///////////////////////////////////////////////////
/////////// PAGINA 11 - BASICO DOM ////////////////
///////////////////////////////////////////////////

window.onclick = function () {
  //Obtiene un elemento  del HTML a través de su id "información" para agregar mensajes
  var info = document.getElementById("informacion");

  // Obtiene el número de enlaces de la pagina a través de su tag "a"
  var enlaces = document.getElementsByTagName("a");

  // crea un mensaje para ser visualizado en el HTML:
  info.innerHTML = "Numero de enlaces = " + enlaces.length;

  // Direccion del penultimo enlace
  var mensaje = "El pen&uacute;ltimo enlace apunta a: " + enlaces[enlaces.length - 2].href;

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;

  // Numero de enlaces que apuntan a http://prueba
  var contador = 0;

  for (var i = 0; i < enlaces.length; i++)
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
    if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
      contador++;

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

  // Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a"); // [2] para el tercer párrafo

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces.length;
}

///////////////////////////////////////////////////
//////// PAGINA 12 - BASICO DOMO VISUAL ///////////
///////////////////////////////////////////////////

function muestra() {
  var elemento = document.getElementById("adicional");
  elemento.className = "visible";

  var enlace = document.getElementById("enlace");
  enlace.className = "visible";

  var enlace1 = document.getElementById("enlace1");
  enlace.className = "oculto";

}

///////////////////////////////////////////////////
/////////// PAGINA 13 - MUESTRA OCULTA ////////////
///////////////////////////////////////////////////

function muestraOculta(id) {
  var elemento = document.getElementById('contenidos_' + id);
  var enlace = document.getElementById('enlace_' + id);

  if (elemento.style.display == "" || elemento.style.display == "block") {
    elemento.style.display = "none";
    enlace.innerHTML = 'Mostrar contenidos';
  }
  else {
    elemento.style.display = "block";
    enlace.innerHTML = 'Ocultar contenidos';
  }
}

///////////////////////////////////////////////////
//////////// PAGINA 14 - ANA DE TEXTO /////////////
///////////////////////////////////////////////////

function agregaLinea() {
  var oTbl = document.getElementById("tblUno");
  var oLin = oTbl.insertRow(-1);
  var oCelda1 = oLin.insertCell(0);
  var oCelda2 = oLin.insertCell(1);

  oCelda1.innerHTML = "Celda";
  oCelda2.innerHTML = 'Texto y campo ' +
    '<input type="text" name="campo"/>';
}

function eliminaLinea() {
  var oTbl = document.getElementById("tblUno");
  oTbl.deleteRow(1);
}

///////////////////////////////////////////////////
///////////// PAGINA 15 - ANA DE TEXTO ////////////
///////////////////////////////////////////////////

contador = 3;
function anade() {
  var elemento = document.createElement("li");
  var lista = document.getElementById("lista");
  var nuevoElemento = "<li>Elemento " + (++contador) + "</li>";
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}

///////////////////////////////////////////////////
///////////// PAGINA 17 - FECHA-SIGNO /////////////
///////////////////////////////////////////////////

function validaFechaMenor(campo) {
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;
  if (campo.value == "")
    alert("Faltan datos");
  else {
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

function validaFecha(valor) {
  var dConvertida = null;
  var sAnio = "";
  var sMes = "";
  var sDia = "";
  var nAnio = 0, nMes = 0, nDia = 0;

  if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    nDia = parseInt(valor.substring(0, 2), 10);
    nMes = parseInt(valor.substring(3, 5), 10);
    nAnio = parseInt(valor.substring(6, 10), 10);

    if (nDia < 1 || nDia > 31)
      alert("El día no es válido")
    else {
      if (nMes < 1 || nMes > 12)
        alert("El mes no es válido");
      else {
        if ((nMes == 1 || nMes == 3 || nMes == 5 || nMes == 7 ||
          nMes == 8 || nMes == 10 || nMes == 12) && nDia > 31)
          alert("El mes tiene máximo 31 días");
        else if ((nMes == 4 || nMes == 6 || nMes == 9 ||
          nMes == 11) && nDia > 30)
          alert("El mes tiene máximo 30 días");
        else if ((nMes == 2) && ((nDia > 29) || (nAnio % 4 != 0 && nDia > 28)))
          alert("Febrero tiene 28 días o 29 en bisiesto");
        else {
          dConvertida = new Date();
          dConvertida.setFullYear(nAnio, nMes - 1, nDia);
        }//fin validaci�n día-mes
      }//mes válido
    }//día válido
    creasigno(nDia, nMes);
  }//formato válido

  else {
    alert("No tiene formato de fecha");
  }
  return dConvertida;
}
function creasigno(nDia, nMes) {

  var newDiv = document.createElement("div");

  if ((nDia > 20) && (nMes == 3) || (nDia <= 20) && (nMes == 4))
    var newContent = document.createTextNode("SIGNO ARIES");
  else if ((nDia > 20) && (nMes == 4) || (nDia <= 20) && (nMes == 5))
    var newContent = document.createTextNode("SIGNO TAURO");
  else if ((nDia > 20) && (nMes == 5) || (nDia <= 20) && (nMes == 6))
    var newContent = document.createTextNode("SIGNO GEMINIS");
  else if ((nDia > 20) && (nMes == 6) || (nDia <= 22) && (nMes == 7))
    var newContent = document.createTextNode("SIGNO CANCER");
  else if ((nDia > 22) && (nMes == 7) || (nDia <= 23) && (nMes == 8))
    var newContent = document.createTextNode("SIGNO LEO");
  else if ((nDia > 23) && (nMes == 8) || (nDia <= 22) && (nMes == 9))
    var newContent = document.createTextNode("SIGNO VIRGO");
  else if ((nDia > 22) && (nMes == 9) || (nDia <= 22) && (nMes == 10))
    var newContent = document.createTextNode("SIGNO LIBRA");
  else if ((nDia > 22) && (nMes == 10) || (nDia <= 22) && (nMes == 11))
    var newContent = document.createTextNode("SIGNO ESCORPIO");
  else if ((nDia > 22) && (nMes == 11) || (nDia <= 21) && (nMes == 12))
    var newContent = document.createTextNode("SIGNO SAGITARIO");
  else if ((nDia > 21) && (nMes == 12) || (nDia <= 21) && (nMes == 1))
    var newContent = document.createTextNode("SIGNO CAPRICORNIO");
  else if ((nDia > 21) && (nMes == 1) || (nDia <= 21) && (nMes == 2))
    var newContent = document.createTextNode("SIGNO ACUARIO");
  else if ((nDia > 22) && (nMes == 21) || (nDia <= 23) && (nMes == 3))
    var newContent = document.createTextNode("SIGNO PICIS");


  //var newContent = document.createTextNode("SIGNO");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);
  newDiv.style = "border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";
}
