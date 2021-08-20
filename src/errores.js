///////////////////////////*MANEJO DE ERRORES JS*//////////////////////////////
//TRY-CATCH
try {
  console.log("en el try se agrega el codigo a evaluar");
  noexiste;
} catch (error) {
  console.error(error);
  console.info(
    "en el catch se captura el tipo de error  y se visualiza en consola"
  );
} finally {
  console.log(
    "este bloque siempre se ejecutara al final de un bloque try-catch"
  );
}
//PERSONALIZACION DE UN TRY-CATCH
try {
  let numero = 20;
  if (isNaN(numero)) {
    throw new Error("El caracter no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`se produjo el siguiente error ${error}`);
}

///////////////////////////*INTERRUPCION FLUJO JS BREAK Y CONTINUE*/////////////
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break; // rompe el ciclo
    continue; // se salta la iteracion actual
  }
  console.log(numeros[i]);
}
