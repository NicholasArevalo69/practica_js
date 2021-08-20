////////////////////////////////*OBJETO DATE*/////////////////////////
let fecha = new Date();
console.log(fecha);
// dia de la semana
console.log(fecha.getDay());
// dia del mes
console.log(fecha.getDate());
// mes
console.log(fecha.getMonth());
// año
console.log(fecha.getFullYear());
// hora
console.log(fecha.getHours());
// hora
console.log(fecha.getMinutes());
// segundos
console.log(fecha.getSeconds());
// fecha completa a string
console.log(fecha.toString());
// fecha completa string acortada
console.log(fecha.toDateString());
// fecha completa string recorte digitos formato rapido
console.log(fecha.toLocaleString());
