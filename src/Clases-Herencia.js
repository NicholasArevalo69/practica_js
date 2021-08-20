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
  }

  sonar() {
    console.log("soy un perro y ladro");
  }
  ladrar() {
    console.log("guauu guauu !!");
  }
}

const minie = new Animal("Minie", "hembra");
const scooby = new Perro("Scooby", "macho", "gigante");

console.log(minie);
console.log(scooby);
minie.saludar();
minie.sonar();
scooby.saludar();
scooby.sonar();
