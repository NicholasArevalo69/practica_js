//Calcular puntos de un equipo de futbol

/*const saltaLinea = () => {
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
};

const imprimir = (frase) => {
  document.write(frase);
  saltaLinea();
};

let victorias = parseInt(prompt("ingrese el numero de victorias"));
let empates = parseInt(prompt("ingrese el numero de empates"));

let total = victorias * 3 + empates;

imprimir("El total de puntos es de: " + total);

//Juego adivinar numero 1 al 100*/

/*let numeroElegido = Math.round(Math.random() * 100);
console.log(numeroElegido);
let numeroingresado = null;
let ocasiones = 0;
while (numeroElegido != numeroingresado) {
  numeroingresado = prompt("Adivine el numero entero entre 0 y 100");
  ocasiones++;
  if (numeroingresado == numeroElegido) {
    alert("felicidades acerto el numero en :" + ocasiones + "ocasiones");
  } else if (numeroingresado < numeroElegido) {
    alert("el numero es mayor");
  } else {
    alert("el numero es menor");
  }
}*/

//Juego estrellas

/*const saltaLinea = () => {
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
};

const imprimir = (frase) => {
  document.write(frase);
  saltaLinea();
};

for (let lineas = 1; lineas <= 3; lineas++) {
  for (let columnas = 1; columnas <= 10; columnas++) {
    document.write("*");
  }

  saltaLinea();
}*/

//Juego adivinar numero 1 al 100 con HTML/

/*let numeroElegido = Math.round(Math.random() * 100);
let oportunidades = 0;

document.querySelector(".btn_enviar").addEventListener("click", () => {
  let numeroingresado = document.querySelector(".campo").value;
  adivinaNumero(numeroingresado);
  console.log(numeroElegido);
});

const adivinaNumero = (param) => {
  if (param == numeroElegido) {
    alert(`felicidades adivino el numero en: ${oportunidades} oportunidades`);
    oportunidades++;
    document.querySelector(".campo").value = "";
  } else if (param < numeroElegido) {
    alert("el numero es mayor");
    oportunidades++;
    document.querySelector(".campo").value = "";
  } else {
    alert("el numero es menor");
    oportunidades++;
    document.querySelector(".campo").value = "";
  }
};*/

//Juego adivinar numero 1 al 100 con arrays

/*let numerosElegidos = [];
let contador = 0;

const llenaArrayRandom = () => {
  for (let i = 0; i < 5; i++) {
    let numeroElegido = Math.round(Math.random() * 100);
    numerosElegidos.push(numeroElegido);
  }
};

console.log(numerosElegidos);
llenaArrayRandom();

document.querySelector(".btn_enviar").addEventListener("click", () => {
  let numeroingresado = document.querySelector(".campo").value;
  adivinaNumero(numeroingresado);
});

const adivinaNumero = (param) => {
  for (let j = 0; j < numerosElegidos.length; j++) {
    if (param == numerosElegidos[j]) {
      let indice = numerosElegidos.indexOf(numerosElegidos[j]);
      contador++;
      if (indice != -1) {
        numerosElegidos.splice(indice, 1);
        alert(`felicidades adivinaste el numero :${contador} de ${5}`);
        console.log(numerosElegidos);
        break;
      }
      console.log(numerosElegidos);
    } else if (param < numerosElegidos[j]) {
      alert("el numero es mayor");
      break;
    } else {
      alert("el numero es menor");
      break;
    }

    document.querySelector(".campo").value = "";
  }
  contador == 5
    ? alert("felicidades has adivinado todos los numeros")
    : console.log(contador);
};*/

//Ejercicio canvas bandera

/*let ventana = document.querySelector("canvas");
let pincel = ventana.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();*/

//Ejercicio canvas mincraft

/*let ventana = document.querySelector("canvas");
let pincel = ventana.getContext("2d");

pincel.fillStyle = "darkgreen";
pincel.fillRect(0, 0, 350, 300);

pincel.fillStyle = "black";
pincel.fillRect(50, 40, 90, 90);
pincel.fillRect(210, 40, 90, 90);
pincel.fillRect(140, 130, 70, 100);
pincel.fillRect(100, 190, 40, 110);
pincel.fillRect(210, 190, 40, 110);*/

//Ejercicio canvas semaforo loops

/* let ventana = document.querySelector("canvas");
let pincel = ventana.getContext("2d");

const creaCuadrado = (x, y, color) => {
  pincel.fillStyle = color;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, 50, 50);
};

creaCuadrado(0);
creaCuadrado(50);
creaCuadrado(100);
creaCuadrado(150);

let incrementaX = 0,
  incrementaY = 0;

for (let i = 1; i < 12; i++) {
  creaCuadrado(incrementaX, 0, "red");
  creaCuadrado(incrementaX, 50, "yellow");
  creaCuadrado(incrementaX, 100, "green");
  incrementaX += 50;
  incrementaY += 50;
} */

//Ejercicio canvas eventos mouse

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

let flag = false;
let xYellow = 0;
let xBlue = 50;
let xRed = 100;
let yCuadros = 0;
let tamanoCuadros = 50;
let colorActual = "yellow";
//calcula coordenadas donde se hace clic

const exhibirAlerta = (event) => {
  let x = event.pageX - pantalla.offsetLeft;
  let y = event.pageY - pantalla.offsetTop;
  console.log(x + "," + y);
  alert("usted hizo clic");
};

const colorRandom = () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const dibujarCirculo = (x, y) => {
  if (flag) {
    pincel.fillStyle = colorActual;
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
  }
};

const dibujarCuadrado = (x, y, tamano, color) => {
  pincel.fillStyle = color;
  pincel.fillRect(x, y, tamano, tamano);
  pincel.fill();
};

const dibujarPaletaColor = () => {
  dibujarCuadrado(xYellow, yCuadros, tamanoCuadros, "yellow");
  dibujarCuadrado(xBlue, yCuadros, tamanoCuadros, "blue");
  dibujarCuadrado(xRed, yCuadros, tamanoCuadros, "red");
};

pantalla.onmousemove = dibujarCirculo;

const habilita = () => {
  flag = true;
};

const deshabilita = () => {
  flag = false;
};

const delimitaPaletaColor = (xCoordenada, yCoordenada) => {
  if (
    xCoordenada >= 0 &&
    xCoordenada < 3 * tamanoCuadros + 5 &&
    yCoordenada >= 0 &&
    xCoordenada < tamanoCuadros + 5
  ) {
    return false;
  } else {
    return true;
  }
};

const capturaMovimientoMouse = (event) => {
  let x = event.pageX - pantalla.offsetLeft;
  let y = event.pageY - pantalla.offsetTop;

  console.log(delimitaPaletaColor(x, y));
  if (delimitaPaletaColor(x, y)) {
    dibujarCirculo(x, y);
  }
};
pantalla.onmousemove = capturaMovimientoMouse;
pantalla.onmousedown = habilita;
pantalla.onmouseup = deshabilita;

dibujarPaletaColor();

/*trabajando con animaciones

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

const disenaCircunferencia = (x, y, radio) => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  pincel.fillStyle = randomColor;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
};

const limpiarPantalla = () => {
  pincel.clearRect(0, 0, 600, 400);
};

let x = 0;
let sentido = 1;

const graficar = () => {
  limpiarPantalla();

  if (x >= 599) {
    sentido = -1;
  } else if (x <= 0) {
    sentido = 1;
  }
  disenaCircunferencia(x, 20, 10);
  x += sentido;
};

setInterval(graficar, 5);
//disenaCircunferencia(40, 40, 20);*/

////////////////////////TIRO AL BLANCO///////////////////////////////////

/*let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

let x_random;
let y_random;
let radio = 10;

const disenaCircunferencia = (x, y, radio, color) => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
};

const limpiarPantalla = () => {
  pincel.clearRect(0, 0, 600, 400);
};

const disenarObjetivo = (x, y) => {
  disenaCircunferencia(x, y, 30, "red");
  disenaCircunferencia(x, y, 20, "white");
  disenaCircunferencia(x, y, 10, "green");
};

const sortearPocision = (maximo) => {
  return Math.floor(Math.random() * maximo);
};

const graficar = () => {
  limpiarPantalla();
  x_random = sortearPocision(600);
  y_random = sortearPocision(400);
  disenarObjetivo(x_random, y_random);
};

setInterval(graficar, 5000);

const disparar = (event) => {
  let x = event.PageX - pantalla.offsetLeft;
  let y = event.PageY - pantalla.offsetTop;
  if (
    x < x_random + radio &&
    x > x_random - radio &&
    y < y_random + radio &&
    y > y_random - radio
  ) {
    alert("Tiro certero");
  }
  alert("Tiro herrado");
};

pantalla.onclick = disparar;*/
