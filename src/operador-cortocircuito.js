///////////////////////////*OPERADOR CORTO CIRCUITO*////////////////////////////////
//CORTO CIRCUITO OR CUANDO EL VALOR DE LA IZQUIERDA VALIDE A TRUE SE CARGARA POR DEFECTO
function saludar(nombre) {
  //operador corto circuito
  nombre = nombre || "desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("nico");

//valores truthy o tienden a verdadero
console.log("nombre" || "valor de la derecha");
console.log(19 || "valor de la derecha");
console.log(-19 || "valor de la derecha");
console.log(true || "valor de la derecha");
console.log([] || "valor de la derecha");
console.log({} || "valor de la derecha");

//valores falsy o tienden a falso
console.log(false || "valor de la derecha");
console.log(null || "valor de la derecha");
console.log(undefined || "valor de la derecha");
console.log("" || "valor de la derecha");
console.log(0 || "valor de la derecha");

//CORTO CIRCUITO AND CUANDO EL VALOR DE LA IZQUIERDA VALIDE A FALSE SE CARGARA POR DEFECTO
console.log("nombre" && "valor de la derecha");
console.log(19 && "valor de la derecha");
console.log(-19 && "valor de la derecha");
console.log(true && "valor de la derecha");
console.log([] && "valor de la derecha");
console.log({} && "valor de la derecha");

//valores falsy o tienden a falso
console.log(false && "valor de la derecha");
console.log(null && "valor de la derecha");
console.log(undefined && "valor de la derecha");
console.log("" && "valor de la derecha");
console.log(0 && "valor de la derecha");
