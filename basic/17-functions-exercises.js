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
let arrayDos = ["rodrigo", "automovil","kali","windows","macos"]
function mayusText(arrayDos){
  let minus
  for(let texto of arrayDos){
    minus = 
  }
}
// 5. Crea un función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos cómunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden alfabetico

// 10. Crea una función que calcule el factorial de un número dado