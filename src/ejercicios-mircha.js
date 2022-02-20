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
  if (entrada.length && numRecorte != null) {
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
  let palBuscar = prompt("Ingrese la palabra a buscar");

  if (!entrada) return console.error("no ingresaste el texto principal");
  if (!palBuscar) return console.error("no ingresaste la palabra a buscar");

  let i,
    contador = 0;
  while (i !== -1) {
    i = entrada.indexOf(palBuscar, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return alert(`la palabra ${palBuscar} se repite ${contador} veces`);
};
//cuentaPalabra();

/* 7. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
Ej. mifuncion("Salas") devolverá true.*/
const palindromo = () => {
  let entrada = prompt("Ingrese una palabra por favor");
  if (!entrada) return console.error("no ingresaste una palabra");
  entrada = entrada.toLowerCase().split(" ").join("");
  let palabraInversa = entrada.split("").reverse().join("");
  console.log(entrada);
  console.log(palabraInversa);

  entrada === palabraInversa
    ? alert("la palabra es palindroma")
    : alert("la palabra no es palindroma");
};
//palindromo();

/* 8.Programa una función que elimine cierto patrón de caracteres de un texto dado,
Ej. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
const retiraPatron = () => {
  let texto = prompt("Ingrese un texto por favor");
  if (!texto) return console.error("no ingresaste el texto");

  let patron = prompt("Ingrese un patron a retirar");
  if (!patron) return console.error("no ingresaste el patron a retirar");
  console.info(texto.replace(new RegExp(patron, "ig"), ""));
};
//retiraPatron();

/* 9.Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const numAleatorio = () => console.info(Math.round(Math.random() * 100) + 500);
//numAleatorio();

/* 10.Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
Ej. miFuncion(2002) devolverá true.*/
const capicua = () => {
  let entrada = prompt("Ingrese un numero entero por favor");
  if (!entrada)
    return console.error("no ingresaste un numero o el numero no es valido");
  entrada = entrada.split(" ").join("");
  let palabraInversa = entrada.split("").reverse().join("");
  console.log(entrada);
  console.log(palabraInversa);

  entrada === palabraInversa
    ? alert("el numero es capicua")
    : alert("el numero no es capicua");
};
//capicua();

/* 11.Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
se define como el producto de todos los números enteros positivos desde 1 hasta n),
Ej. miFuncion(5) devolverá 120.*/
const factorial = () => {
  let entrada = parseInt(prompt("Ingrese un numero entero por favor"));

  if (!entrada || isNaN(entrada) || Math.sign(entrada) === -1) {
    console.error("no ingresaste un numero o uno valido");
  }
  let factorial = 1;
  for (let i = entrada; i > 1; i--) {
    factorial = factorial * i;
  }
  console.log(`el factorial de ${entrada} es ${factorial}`);
};
//factorial();

/* 12.Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no,
Ej. miFuncion(7) devolverá true.*/
const numeroPrimo = () => {
  let num = parseInt(prompt("ingrese un numero entero"));

  let divisible = false;

  if (!num || isNaN(num) || Math.sign(num) === -1) {
    console.error("no ingresaste un numero o uno valido");
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisible = true;
      break;
    }
  }
  divisible
    ? console.log("El numero no es primo")
    : console.log("El numero es primo");
};
//numeroPrimo();

/* 12-1.Programa una funcion que al ingresar una lista de numeros muestre la lista de primos y no primos*/

const listaPrimos = () => {
  let cantidad = parseInt(
    prompt("Ingrese la cantidad de numeros que ingresaran")
  );
  let arreglo = [];
  let noPrimos = [];
  let arregloPrimos = [];

  for (let i = 0; i < cantidad; i++) {
    let num = parseInt(prompt(`ingresando numero ${i + 1} de ${cantidad}`));
    arreglo.push(num);
  }

  arreglo.forEach((el) => {
    if (!(el % 2 === 0) && el > 1) {
      arregloPrimos.push(el);
    } else if (el % 2 === 0) {
      noPrimos.push(el);
    }
  });

  console.log(arreglo);
  console.log(arregloPrimos);
  console.log(noPrimos);
};
//listaPrimos();

/*13.Programa una función que determine si un número es par o impar,
Ej. miFuncion(29) devolverá Impar.*/
const numPar = () => {
  let num = parseInt(prompt("ingrese un numero entero"));

  if (!num || isNaN(num) || Math.sign(num) === -1) {
    console.error("no ingresaste un numero o uno valido");
  }
  num & 1 ? console.log("el numero es impar") : console.log("el numero es par");
};
numPar();
/*Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
Ej miFuncion(0,"C") devolverá 32°F.*/
