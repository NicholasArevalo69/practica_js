//////////////////*FUNCIONES ANONIMAS AUTOEJECUTABLES*////////////////////////
(function () {
  console.log("Mi primer funcion auto ejecutable");
})();

(function (d, w, c) {
  console.log("Mi segunda funcion auto ejecutable");
  console.log(d);
  console.log(w);
  c.log("este es un console.log");
})(document, window, console);

///////////////////////*MODOS DE ESCRITURA*//////////////////////////
//CLASICA
(function () {
  console.log("version Clasica");
})();

//*CROCKFORD
/*
((function () {
  console.log("version Crockford");
})());
*/

//*UNARIA
/*
+function () {
  console.log("version Unaria");
}();
*/

//*FACEBOOK
/*
!function () {
  console.log("version Facebook");
}();
*/
