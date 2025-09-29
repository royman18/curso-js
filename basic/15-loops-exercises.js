// Nota: Explora diferentes sintaxis de bucles para resolever los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i<=20; i++){
  console.log(i)
}
// 2. Crea un bucle que sume todos los núemeros del 1 al 100  y muestre el resultado
let total = 0
for(let i = 1; i <= 100; i++){
  total+= i;

}
console.log(total)

// 3. Crea un bucle que sume todos los números pares entre 1 y 50 
let numero = 1
let resultado = 0
while(numero <= 50){
  if(numero % 2 === 0){
  resultado += numero;
  }
  numero ++
}
console.log(resultado)
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["rodrigo","fatima","ricardo","emiliano"]
for(nombre of nombres){
  console.log(nombre)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola JavaScript"
let contador = 0
for(caracter of texto){
  if(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u"){
    contador++
  }
}
console.log(contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNumeros = [24,17,27,74]
let producto = 1
for(numero of arrayNumeros){
  producto = producto * numero

}
  console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let i = 1;

while (i <= 10) {
  console.log(`5 x ${i} = ${5 * i}`);
  i++;
}

// 8. Usa un bucle para invertir una cadena de texto
let texto2 = "Bienvenido"
let textoInvertido = ""
for(let i = texto2.length -1; i>= 0; i--){
  textoInvertido += texto2[i]
}
console.log(textoInvertido)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
let contador2 = 0
while(contador2 < 10){
  console.log(a)
  let siguiente = a +b
  a = b
  b = siguiente
  contador2++
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let nuevoArray = [7, 38, 150, 1, 6,12 ,21, 11]
let mayoresA10 = []
for(numero of nuevoArray){
  if(numero > 10){
    mayoresA10.push(numero)
  
  }
}
console.log(mayoresA10)