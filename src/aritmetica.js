/* ARCHIVO EJEMPLO PARA LA TEMATICA MODULOS IMPORT - EXPORT*/
export const PI = Math.PI;
export let user = "nicholas";
export let pass = "qwerty";
export let host = "localhost:3000";

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

export const aritmetica = {
  sumar,
  restar
};

export default function saludar() {
  console.log("hola modulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola modulos clases +ES6");
  }
}
