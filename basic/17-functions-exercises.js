// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b){
  return a + b
}
resultado = suma(10,10)
console.log(resultado)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numeroMayor(arrayUno){
  let mayor = arrayUno[0]
  for( let numero of arrayUno){
    if(numero > mayor ){
      mayor = numero
    }
}
  return mayor
}
console.log(numeroMayor([11,12,13,10,25,33]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto){
  let contador = 0
  let vocales = "aeiou"
  for(let caracter of texto){
    if(vocales.includes(caracter)){
      contador++
    }
  }
  return contador
}
console.log(contarVocales("rodrigo"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con los strings en mayúsculas

function mayusText(arrayDos){
  let arrayVacio = []
  for(let texto of arrayDos){ 
    texto = texto.toUpperCase()
    arrayVacio.push(texto)
  } 
  return arrayVacio
} 

let arrayDos = ["perro","gato","borrego"] 

console.log(mayusText(arrayDos))

// 5. Crea un función que reciba un número y devuelva true si es primo, y false en caso contrario
function numeroPrimo(unNumero) {
  if (unNumero < 2) return false; 
  for (let i = 2; i < unNumero; i++) {
    if (unNumero % i === 0) {
      return false;
    }
  }
  return true;
}
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos cómunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden alfabetico

// 10. Crea una función que calcule el factorial de un número dado