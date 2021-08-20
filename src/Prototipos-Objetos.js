//////////////////////////////////*POO*///////////
//clases = Modelo a seguir
//Objetos = pueden tener atributos y metodos - instancia o copia de una clase
//Atributos - es una caracteristica o propiedad del objeto variable dentro del objeto
//Metodos - Acciones que un objeto puede ejecutar.

//Funcion Constructora
/*function Animal(nombre, genero) {
  //Atributos de la funcion constructora
  this.nombre = nombre;
  this.genero = genero;
  //Metodos de la funcion constructora tener metodos dentro de una funcion es mala practica
  this.sonar = function () {
    console.log("prueba de sonido");
  };
}*/

//Funcion Constructora donde se asignan los metodos al prototipo no a la funcion
function Animal(nombre, genero) {
  //Atributos de la funcion constructora
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar = function () {
  console.log("prueba de sonido");
};

const snoopy = new Animal("snoopy", "macho"),
  bunny = new Animal("lola bunny", "hembra");

console.log(snoopy);
console.log(bunny);
snoopy.sonar();
