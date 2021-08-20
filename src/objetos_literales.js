////////////////////////**OBJETOS LITERALES*////////////////
//consiste en una nueva forma de escribir atributos y metodos y su asignacion
//SIN USAR OBJETOS LITERALES
let nombre = "kiara",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guau guauu");
  }
};
console.log(perro);
perro.ladrar();

//USO DE OBJETOS LITERALES
const dog = {
  nombre,
  edad,
  raza: "callejero",
  ladrar() {
    console.log("wuau wuauu");
  }
};
console.log(dog);
dog.ladrar();
