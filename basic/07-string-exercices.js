// 1. Concatena dos cadenas de texto

let cadenaUno = "Mi nombre es Darh Vader"
let cadenaDos = "Yo soy tu Padre"

console.log(cadenaUno + " " + cadenaDos)

// 2. Muestra la longitud de una cadena de texto

let textoLargo = "Esto es un texto muy pero muy largo"
console.log(textoLargo.length)

// 3. Muestra el primer y el ultimo caracter de un string

console.log(textoLargo[0])
console.log(textoLargo[34])

// 4. Convierte a mayúsculas y a minúsculas un string

console.log(cadenaUno.toUpperCase()) // mayúsculas
console.log(cadenaDos.toLocaleLowerCase()) // minúsculas

// 5. Crea una variable de texto en varias líneas

let variasLineas = `Esto es 
un texto en 
varias líneas`

// 6. Interpola el valor de una variable en un string

console.log(`Esto es el valor de "cadenaUno": ${cadenaUno} y esto es le valor de "cadenaDos": ${cadenaDos}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(variasLineas.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadenaDos.includes("Padre"))

// 9. Comprueba si dos string son iguales

console.log(cadenaUno == cadenaDos)

// 10. Comprueba si dos string tienen la misma longitud

console.log(textoLargo.length == cadenaDos.length)




