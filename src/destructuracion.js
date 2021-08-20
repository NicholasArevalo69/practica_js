////////////////////////*DESTRUCTURACION*//////////////////
//Consiste en almacenar de manera dinamica y agil datos provenientes de otros arreglos
const numeros = [1, 2, 3];

//SIN DESTRUCTURACION
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos, tres);

//CON DESTRUCTURACION
const [one, two, three] = numeros;
console.log(one, two, three);

const gustos = {
  fruta: "manzana",
  moto: "super duke 1290",
  pais: "grecia",
  color: "rojo"
};

let { fruta, moto, pais, color } = gustos;
console.log(fruta, moto, pais, color);
