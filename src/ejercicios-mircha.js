//////////////////////*EJERCICIOS LOGICA PROGRAMACION CURSO MIRCHA*/////////////////

/* 1.Programa una función que cuente el número de caracteres de una cadena de texto,
Ej.miFuncion("Hola Mundo") devolverá 10.*/

const cuentaCaracter = () => {
  let entrada = prompt("Ingrese un texto por favor");

  entrada.length
    ? alert(`el numero de caracteres del texto ingresado es ${entrada.length}`)
    : console.error("el campo no puede estar vacio");
};
//cuentaCaracter();

/* 2.Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
Ej. miFuncion("Hola Mundo", 4) devolverá "Hola".*/
const recortaCaracter = () => {
  let entrada = prompt("Ingrese un texto por favor"),
    numRecorte = prompt("Ingrese numero de caracteres a recortar");
  if (entrada.length) {
    let textRecortado = entrada.slice(0, numRecorte);
    alert(`el texto recortado es ${textRecortado}`);
  } else {
    console.error("el campo no puede estar vacio");
  }
};
//recortaCaracter();

/* 3.Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
const devuelveArreglo = () => {
  let entrada = prompt("Ingrese un texto por favor");
  if (entrada.length) {
    let arreglo = entrada.split(" ");
    console.log(arreglo);
  } else {
    console.error("el campo no puede estar vacio");
  }
};
//devuelveArreglo();

/* 4.Programa una función que repita un texto X veces,
Ej. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
const repiteTexto = () => {
  let entrada = prompt("Ingrese un texto por favor");

  if (entrada.length) {
    let ingreso = prompt("Ingrese el numero de veces que se repetira el texto");

    for (let i = 0; i < ingreso; i++) {
      console.log(entrada);
    }
  } else {
    console.error("el campo no puede estar vacio");
  }
};
//repiteTexto();

/* 5.Programa una función que invierta las palabras de una cadena de texto,
 Ej. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const invierteCadena = () => {
  let entrada = prompt("Ingrese un texto por favor");
  if (entrada.length) {
    let arreglo = entrada.split("").reverse().join("");
    console.log(arreglo);
  } else {
    console.error("el campo no puede estar vacio");
  }
};
//invierteCadena();

/* 6. Programa una función para contar el número de veces que se repite una palabra en un texto largo,
Ej. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
const cuentaPalabra = () => {
  let entrada = prompt("Ingrese un texto por favor");
  if (entrada.length) {
    let arreglo = entrada.split("").reverse().join("");
    console.log(arreglo);
  } else {
    console.error("el campo no puede estar vacio");
  }
};
