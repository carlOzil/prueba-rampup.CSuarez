// Ejercicio 1: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase 
let frase = prompt('pon una frase');
let letra = prompt('elige una letra de esa frase')

function letraRepetida(letra, frase) {
let recuento = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      recuento++;
    }
  }
  return recuento;
}
let respuesta = contarLetra(frase, letra);


//Ejercicio 2: Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

// funcion que de un array

let num = []

