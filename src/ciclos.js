///////////////////////////////*CICLOS*//////////////////////////
//WHILE
let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}

//DO WHILE
do {
  console.log("do while" + contador);
  contador++;
} while (contador < 10);

//FOR
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// RECORRER ARREGLO
let numeros = [10, 20, 30, 40, 50, 60];

// CON FOR
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// CON FOR OF
for (const item of numeros) {
  console.log(item);
}
// RECORRER OBJETO
const nicholas = {
  name: "Nicolas",
  lastname: "Arevalo",
  age: 24
};
//CON FOR IN
for (const prop in nicholas) {
  console.log(`propiedad ${prop} valor ${nicholas[prop]}`);
}
