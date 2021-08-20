/*los objetos dentro de un objeto se llaman atributos/propiedades
mientras que las funciones son metodos*/

//declaracion de un objeto notese se representa con llaves
const myobject = {
  nombre: "nicolas",
  apellido: "arevalo",
  edad: 24,
  pasatiempos: ["programacion", "motociclismo", "natacion", "lectura"],
  soltero: true,
  contacto: {
    email: "desarrolladorweb.69@gmail.com",
    cel: 3205788965,
    twitter: "nico-69"
  },
  saludar: function () {
    console.log("hola");
  },
  decirMyName: function () {
    console.log(`my name is ${this.nombre} and ${this.edad} years old`);
  }
};

//acceso a todos los elementos del objeto
console.log(myobject);

//acceso a la propiedad del objeto
console.log(myobject.nombre);
console.log(myobject.apellido);
console.log(myobject.pasatiempos);

//acceso a al indice de un arreglo dentro de un objeto
console.log(myobject.pasatiempos[3]);
console.log(myobject.contacto);

//acceso a la propiedad de un objeto anidado (objeto dentro de otro objeto)
console.log(myobject.contacto.twitter);

//acceso a una funcion dentro de un objeto
myobject.saludar();
myobject.decirMyName();

//propiedades basicas del objeto Object Javascript

//lista en un arreglo las llaves del objeto
console.log(Object.keys(myobject));

//lista en un arreglo los valores de las llaves del objeto
console.log(Object.values(myobject));

//verifica si la llave proporcionada se encuentra en el objeto
console.log(myobject.hasOwnProperty("nombre"));
console.log(myobject.hasOwnProperty("nacimiento"));
