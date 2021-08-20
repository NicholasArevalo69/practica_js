///////////////*HERENCIA PROTOTIPICA*//////////////////
function Animal(nombre, genero) {
  //Atributos de la funcion constructora
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar = function () {
  console.log("prueba de sonido");
};

Animal.prototype.saludar = function () {
  console.log(`Hola mi nombre es ${this.nombre}`);
};

//herencia proto
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
// la funcion constructora Perro hereda del prototipo animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre
Perro.prototype.ladrar = function (params) {
  console.log("soy un perro y ladro");
};

const snoopy = new Perro("snoopy", "macho", "mediano"),
  bunny = new Animal("lola bunny", "hembra");

console.log(snoopy);
console.log(bunny);
snoopy.saludar();
snoopy.ladrar();
