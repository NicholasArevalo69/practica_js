////////////////////////*MODULOS JAVASCRIPT*/////////////////////////////////////////
//remitirse al archivo aritmetica.js para visualizar las posibilidades de importacion
import saludar, { Saludar, PI, user, pass, host } from "./aritmetica";
import { aritmetica } from "./aritmetica";
console.log(PI);
console.log(aritmetica.sumar(55, 5));
saludar();
const saludo = new Saludar();
console.log(saludo);
