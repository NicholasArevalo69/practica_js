/////////////////////////////TEMPLATE STRING
let nombre = "nicolas";
let apellido = "arevalo";
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum dui montes himenaeos facilisis, potenti dis urna sed gravida rutrum ultricies varius eu augue habitasse, orci suscipit nulla congue fermentum mollis nisl leo fringilla posuere tempor. Magnis ultricies feugiat himenaeos luctus lacus gravida cras non ultrices, hendrerit diam enim class montes sed sodales rhoncus, in varius dictum sem vestibulum convallis et quam. Quam condimentum taciti vulputate habitasse litora sed nam ut fringilla in, aenean mus natoque curabitur metus venenatis rhoncus posuere neque mauris, commodo euismod magna dis cras cursus turpis lacus mollis.";

let saludo = `Hola mi nombre es ${nombre}  y mi apellido es ${apellido}`;
console.log(saludo);

/////////////////////////NUMEROS
let a = 2;
let b = 7.19;
let d = "5.6";
console.log(b.toFixed(1));
console.log(b.toFixed(5));
console.log(parseInt(b));
console.log(parseFloat(d));
console.log(a + d);

///////////////////////OBJETOS
//a diferencia de los arreglos, se utilizan llaves en vez de corchetes
//almacenan la info de la forma propiedad:valor
const miObjeto = {
  nombre: "chubaca",
  apellido: "benitez",
  color: "rojo",
  numero: "69"
};

////////////////////*HOISTING*/
miNumero = 5; //asignacion e iniciacion
document.write(miNumero);
let miNumero; //declaracion
/* notese como se incializa la variable antes de haberse declarado js
esto normalmente daria un error asi que js sube la declaracion y
la ubica primero que todo a este fenomeno se le conoce como hoisting*/
