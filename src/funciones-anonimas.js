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
