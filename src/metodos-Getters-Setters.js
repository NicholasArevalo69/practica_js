/////////////////*caracteristas POO DE JAVASCRIPT*/////////////////
class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  sonar() {
    console.log("hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //metodo super llama el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("soy un perro y ladro");
  }
  ladrar() {
    console.log("guauu guauu !!");
  }
  //METODO ESTATICO se puede usar sin necesidad de instanciar la clase
  static queEres() {
    console.log(`los perros somos animales mamiferos que pertenecemos a la familia
    de los caninos, somos considerados los mejores amigos del hombre`);
  }
  // los setters y getters son metodos que permiten establecer y obtener valores de atributos de una clase
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const minie = new Animal("Minie", "hembra");
const scooby = new Perro("Scooby", "macho", "gigante");
console.log(scooby);

scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);
