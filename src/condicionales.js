/////////////////////*CONDICIONALES*//////////////////

//IF-ELSE
let edad = 18;

if (edad >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

//ELSE-IF CON OPERADORES LOGICOS
let hora = 15;
if (hora >= 0 && hora <= 5) {
  console.log("dejen dormir al projimo");
} else if (hora >= 6 && hora <= 11) {
  console.log("buenos dias !!");
} else if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes !!");
} else if (hora >= 19 && hora <= 23) {
  console.log("buenas noches !!");
}

//OPERADOR TERNARIO (condicion)?verdadero:falso
console.log("operador ternario");
let eresMayor = edad >= 18 ? "eres mayor de edad" : "eres menor de edad";
console.log(eresMayor);

//SWITCH - CASE
let dia = 2;
switch (dia) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miercoles");
    break;
  case 4:
    console.log("jueves");
    break;
  case 5:
    console.log("viernes");
    break;
  default:
    console.log("el dia no existe");
    break;
}
