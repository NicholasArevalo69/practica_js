////////////////////*ARRAYS O ARREGLOS*/

//declaracion
const miArreglo = [1, 2, 3, 4, 5];

//ARREGLO ANIDADO
const arregloAnidado = [1, true, "hola", ["A", "B", "C", [1, 2, 3]]];

//ACCESO AL VALOR DE UN ARRAY
console.log(arregloAnidado);

//ACCESO AL VALOR DE UNA POSICION A TRAVES DE SU REFERENCIA
console.log(arregloAnidado[2]);

/*En Los Arreglos Se Accede Al Valor A Traves De Su Referencia
Esto Significa Que Podemos Acceder Al Valor De Un Array Anidado
Por Medio De SuS Coordenada*/
console.log(arregloAnidado[3][2]);
console.log(arregloAnidado[3][3][0]);

//ALGUNOS METODOS BASICOS PARA LOS ARREGLOS///////////

//imprime la cantidad de elementos que contiene el arreglo
console.log(miArreglo.length);

//asigna a todas las pocisiones del arreglo el valor indicado
miArreglo.fill("cadena");
console.log(miArreglo);

//añade un nuevo elemento en el ultimo indice o pocision del array
const colores = ["amarillo", "azul", "rojo", "verde"];
colores.push("violeta");
console.log(colores);

//elimina el ultimo elemento que este en el array
const numeros = [1, 2, 3, 4, 5, 6];
numeros.pop();
console.log(numeros);

//recorre la totalidad del array desde su indice a elemento final
colores.forEach((e, index) => {
  console.log(`<li id=${index}>${e}</li>`);
});
