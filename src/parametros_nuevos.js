/////////////////**PARAMETROS REST Y OPERADOR SPREAD*//////////////
//FUNCION CON PARAMETROS FIJOS
function sumar(a, b) {
  let resultado = a + b;
}
// USO DE PARAMETROS REST
function suma(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}
console.log(suma(1, 2, 4, 5, 6, 7, 8, 9));

// USO DE OPERADOR SPREAD
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

const arr3 = [arr1, arr2];
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);
