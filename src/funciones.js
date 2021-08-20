///////////////////////////////FUNCIONES
//FUNCION ESTRUCTURA
function myFunction() {
  console.log("esto es una funcion");
}

//INVOCACION O LLAMADO A UNA FUNCION
myFunction();

//FUNCION QUE DEVUELVE UN VALOR
function funcionDevuelveVlor() {
  return "esto retorna una cadena de texto";
}
console.log(funcionDevuelveVlor());

//FUNCION QUE ACEPTA PARAMATETROS
function funcionParametros(nombre, edad) {
  alert(`el nombre es ${nombre} y la edad es ${edad}`);
}
funcionParametros("chubaca", 18);

//FUNCIONES DECLARADAS
function funcionDeclarada() {
  console.log(`esta es una funcion declarada puede invocarse en cualquier
  parte del codigo, incluso antes de que la propia funcion sea declarada`);
}
funcionDeclarada();
//FUNCIONES EXPRESADAS
const funcionExpresada = function () {
  console.log(`esta es una funcion expresada, es asignada a una variable
   si se invoca antes de declarar la propia funcion js arrojara un error`);
};
funcionExpresada();
