console.log(console);
console.error("esto es un error");
console.warn("esto es un aviso");
console.info("esto es un mensaje informativo");
//console.clear()

console.log(window);
console.log(document);
console.dir(document);

//agrupar por consola
console.group("cursos de programacion");
console.log("Curso de Javascript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de diseño y programacion Web");
console.groupEnd();

//agrupar por tabla
console.table(Object.entries(console));

const perro = {
  nombre: "boni",
  raza: "Bulldog",
  color: "Cafe"
};
console.table(Object.entries(perro));

//verificar el tiempo que demora la ejecucion de un bloque de codigo
/*console.time("cuanto tiempo dura este for");

const arreglo = Array(5000);
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

console.timeEnd("cuanto tiempo dura este for");*/

//verificar el numero de ejecuciones de un codigo
/*for (let i = 0; i <= 100; i++) {
  console.count("codigo for");
  console.log(i);
}*/
//Realizar pequeños test a bloques de codigo por medio de console
let x = 3,
  y = 2,
  pruebaXY = "se espera que X siempre sea menor que Y";

console.assert(x < y, { x, y, pruebaXY });
