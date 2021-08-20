///////////////////*FUNCIONES DE FLECHA - ARROW FUNCTION*//////////////////
//minimiza la expresion de una funcion normal declarada
const saludar = () => {
  console.log("HOLA");
};
//si la funcion contiene una unica linea puede ser abreviada
const saluda = () => console.log("hola");
saluda();
//si la funcion recibe un solo parametro se pueden omitir los ()
const saludo = (nombre) => console.log(`Hello ${nombre}`);
saludo("user");

const sumar = (a, b) => a + b;

//muy utiles en iteraciones
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((el) => {
  console.log(el);
});
